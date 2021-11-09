const express = require('express')
const routes = express.Router()

var db = [{
    'a': 'b'
}]

routes.get("/", (req, res) => {
    return res.json(db)
})

module.exports = routes