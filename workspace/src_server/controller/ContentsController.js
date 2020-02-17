//モデルモジュール読み込み
var Request = require("request");
const Content = require("../models/Content");
const QiitaClient = require("../qiita");

class ContentsController {

    async index(req, res, next) {
        const result = await Content.aggregate();
        res.json(result);
    };

    async store(req, res, next) {
        const response = await QiitaClient.request();
        response.forEach(item => { QiitaClient.save(item); });
        res.json(`${response.length}件更新しました！`);
    };

    async show(req, res, next) {

    };

    async update(req, res, next) {

    };

    async delete(req, res, next) {

    };
}

module.exports = new ContentsController();