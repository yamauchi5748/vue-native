//モジュール読み込み
var Request = require("request");
const moment = require('moment');
const Content = require("./models/Content");
const Qiita = require("./config").Qiita;

class QiitaClient {

    async request(options) {
        return new Promise(function (resolve, reject) {
            Request(options, (error, response, body) => {
                if (error) reject(error);
                resolve(response);
            });
        });
    };

    async exec() {

        /* DB初期化 */
        await Content.drop();

        /* QiitaAPI用クエリ */
        let query = {
            page: 1,
            skip: 100,
            created_at: moment().subtract(moment.duration(7, 'days')).format('YYYY-MM-DD'),
            stocks: 1
        }

        let result = [];
        let Flag = true;

        /* 全件取得 */
        do {
            /* QiitaAPI用設定 */
            let options = {
                method: 'GET',
                json: true,
                url: `${Qiita.uri}items?page=${query.page}&per_page=${query.skip}&query=created%3A%3E${query.created_at || '2020-01-01'}+stocks%3A%3E${query.stocks || '0'}`,
                Authorization: `Bearer ${Qiita.auth.access_token}`
            }

            /* Qiita記事取得 */
            const response = await this.request(options);
            result = [...result, ...response.body];

            /* totalを設定 */
            const total = response.headers['total-count'];

            if (total <= query.page * query.skip) Flag = false;

            query.page++;

        } while (Flag);

        /* データをDBに保存 */
        result.forEach(async (model) => {
            await Content.insert(model);
        });

        console.log(`${result.length}件更新しました！`);
    }
}

module.exports = new QiitaClient();