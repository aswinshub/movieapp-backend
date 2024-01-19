const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


require('dotenv').config()
require('./config/db')
app.use(morgan('dev'))

const PORT = process.env.PORT 




app.listen(PORT,()=>{

    console.log(`server is running on ${PORT}`)

})