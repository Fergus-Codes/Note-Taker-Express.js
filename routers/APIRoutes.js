const Api_Router = require('express').Router()
const db = require('../db/db.json')
const fs = require('fs')
const uuid = require('uuid')


Api_Router.get('/api/notes', (req, res) => {
    res.json(db)
})


module.exports = Router