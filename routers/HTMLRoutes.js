const HTML_Router = require('express').Router()
const path = require('path')

HTML_Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/index.html'))
});

module.exports = Router