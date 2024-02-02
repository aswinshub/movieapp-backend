const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({

    id:Number,
    moviename:String,
    imgurl:String,
    catogary:String,
    language:String
    


  });
  
  const Movie = mongoose.model('moviedata', movieSchema);
  module.exports = Movie;
  