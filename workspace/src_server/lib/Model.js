//設定モジュール読み込み
const config = require("../config.json");

// mogodbを管理するdboを生成
const dbo = require('./Mongo');
const Mongo = require('mongodb');
const ObjectID = Mongo.ObjectID;
const DB_name = config.DBName;

class Model {
    collection_name = config.default.collectionName;
    object_key = '_id';
    fillable = [];

    async aggregate(pipline) {

        const result = await dbo.aggregate(DB_name, this.collection_name, pipline || []);

        return result;
    };

    async insert(model) {

        let obj = {};

        this.fillable.map(key => {
            obj[key] = model[key];
        });

        const result = await dbo.insert(DB_name, this.collection_name, obj);

        return result;
    };

    async show(object_id) {

        const pipline = [];

        pipline.push({
            $match: {
                [object_key]: ObjectID(object_id)
            }
        });

        const result = await dbo.aggregate(DB_name, this.collection_name, pipline);

        return result[0];
    };

    async update() {

    };

    async delete(_id) {

        const object_id = ObjectID(_id);

        const result = await dbo.delete(DB_name, this.collection_name, object_id);

        return result;
    };

    async drop() {

        const result = await dbo.drop(DB_name, this.collection_name);

        return result;
    };
}

module.exports = Model;