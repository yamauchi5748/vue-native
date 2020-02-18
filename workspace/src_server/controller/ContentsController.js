//モデルモジュール読み込み
const moment = require('moment');
const Content = require("../models/Content");
const Qiita = require("../config").Qiita;
const QiitaClient = require("../qiita");

class ContentsController {

    async index(req, res, next) {

        const query = [
            { $sort: { likes_count: -1 } }
        ];

        const result = await Content.aggregate(query);

        res.json(result);
    };

    async store(req, res, next) {

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
            const response = await QiitaClient.request(options);
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

        res.json(`${result.length}件更新しました！`);
    };

    async show(req, res, next) {

    };

    async update(req, res, next) {

    };

    async delete(req, res, next) {

    };
}

module.exports = new ContentsController();