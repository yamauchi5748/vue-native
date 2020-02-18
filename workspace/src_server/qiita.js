//モジュール読み込み
var Request = require("request");

class QiitaClient {

    async request(options) {
        return new Promise(function (resolve, reject) {
            Request(options, (error, response, body) => {
                if (error) reject(error);
                resolve(response);
            });
        });
    };
}

module.exports = new QiitaClient();