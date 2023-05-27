//Create a router called HTML_Router to handle all routing of HTML, create an instance of it aswell
const HTML_Router = require('express').Router()

// Require path for HTML pathing
const path = require('path')

// Get request to send all traffic to the index html file
HTML_Router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/index.html'))
});


// Get request to send all trafic that enters /notes to the notes.html file
HTML_Router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/notes.html'))
})

module.exports = router;