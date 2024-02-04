const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({

   
    moviename:String,
    imgurl:String,
    catogary:String,
    language:String,
    cast:String,
    discription:String,
    rate:Number,
    nooftickets:Number

    


  });
  
  const Movie = mongoose.model('moviedata', movieSchema);
  module.exports = Movie;
  