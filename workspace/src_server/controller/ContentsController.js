//モデルモジュール読み込み
const Content = require("../models/Content");

class ContentsController {

    async index(req, res, next) {

        const query = [
            { $sort: { likes_count: -1 } }
        ];

        const result = await Content.aggregate(query);

        res.json(result);
    };

    async store(req, res, next) {

    };

    async show(req, res, next) {

    };

    async update(req, res, next) {

    };

    async delete(req, res, next) {

    };
}

module.exports = new ContentsController();