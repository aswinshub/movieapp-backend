const mangoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({

"moviename":String,
"imgurl":String,
"catogary":String,
"language":String



})

const user = mongoose.model('moviedatas',movieSchema)
module.exports = user;
