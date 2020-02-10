//Modelモジュール読み込み
const Model = require("../lib/Model");

class Content extends Model {

    constructor() {
        super();

        this.fillable = ['_id', 'title', 'image_path', 'time', 'link', 'brand', 'categories']
        this.collection_name = "contents"
    }
}

module.exports = new Content();