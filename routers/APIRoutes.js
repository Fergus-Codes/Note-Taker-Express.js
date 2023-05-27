//Create a router called API_Router to handle all routing of for /API & create an instance of it.
const Api_Router = require('express').Router()
// Require fs(nodejs file system) to allow us to read and write
const fs = require('fs')
// Require uuid to allow us to assign a unique ID to each request.
const uuid = require('../helpers/uuid')

//! All request handlers for API Routes
Api_Router.get('/api/notes', async (req, res) => {
    const jsonGetDB = await JSON.parse(fs.readFileSync('db/db.json'))
    res.json(jsonGetDB)
})


Api_Router.post('/api/notes', (req, res) => {
    const note = {
        title: request.body.title,
        text: request.body.text,
        id: uuid()
    };
// Push the new note into the db.json file
    jsonPostDB.push(note)
    // creat a constant with the jsonDB, parse
    const jsonPostDB = JSON.parse(fs.readFileSync(''))
    fs.writeFileSync('db/db.json', JSON.stringify(jsonPostDB))
   res.json(jsonPostDB)

})


module.exports = Api_Router;