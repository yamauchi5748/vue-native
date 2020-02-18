//Modelモジュール読み込み
const Model = require("../lib/Model");

class Content extends Model {

    constructor() {
        super();
        
        this.fillable = ['id', 'title', 'body', 'likes_count', 'reactions_count', 'url', 'user', 'created_at', 'updated_at'];
        this.collection_name = "contents";
    }
}

module.exports = new Content();