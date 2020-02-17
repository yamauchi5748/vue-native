//モデルモジュール読み込み
var Request = require("request");
const Content = require("./models/Content");
const Qiita = require("./config").Qiita;

const options = {
    method: 'GET',
    json: true,
    url: `${Qiita.uri}items?page=1&per_page=100`,
    Authorization: `Bearer ${Qiita.auth.access_token}`
}

class QiitaClient {

    async request() {
        return new Promise(function (resolve, reject) {
            Request(options, (error, response, body) => {
                if (error) reject(error);
                resolve(body);
            });
        });
    };

    async save(model) {
        const result = await Content.insert(model);
    }

}

module.exports = new QiitaClient();