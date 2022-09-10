const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./config/routes')

const app = express()

console.log("Ola");

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())   
app.use(routes)

app.listen(21262, () => {
    console.log('Express Started at http://localhost:21262')
})