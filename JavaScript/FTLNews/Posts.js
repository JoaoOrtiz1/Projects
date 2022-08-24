var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    titulo: String,
    imagem: String,
    conteudo: String,
    slug: String,
    descri: String,
    autor: String,
    views: Number
},{colection:"posts"});

var Posts = mongoose.model("Posts",postSchema);

module.exports = Posts;