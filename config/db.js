

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://aswindb:aswin123@company.ck23ks9.mongodb.net/moviedb?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected To  DB");
  })
  .catch(() => {
    console.log("Error in Connection");
  });
