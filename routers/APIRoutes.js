//Create a router called API_Router to handle all routing of for /API & create an instance of it.
const Api_Router = require('express').Router()
// Require the db.json file to read and write to and from it
const db = require('../db/db.json')
// Require fs(nodejs file system) to allow us to read and write
const fs = require('fs')
// require uuid to allow us to assign a unique ID to each request.
const uuid = require('uuid')

// when api/notes is queried, respond with the current database 
Api_Router.get('/api/notes', (req, res) => {
    res.json(db)
})


module.exports = router;