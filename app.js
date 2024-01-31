const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

require('dotenv').config()
require('./config/db')
app.use(morgan('dev'))

const userRoute = require('./routes/userRoute')
const movieRoute = require('./routes/movieRoute')
app.use('/user', userRoute);
app.use('/movie', movieRoute);


const PORT = process.env.PORT || 4004


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
});

