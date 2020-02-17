//Modelモジュール読み込み
const Model = require("../lib/Model");

class Content extends Model {

    constructor() {
        super();

        this.fillable = ['_id'];
        this.collection_name = "contents";
    }
}

module.exports = new Content();