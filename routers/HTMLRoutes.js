//Create a router called HTML_Router to handle all routing of HTML, create an instance of it aswell
const router = require('express').Router()

// Require path for HTML pathing
const path = require('path')

//! All request handlers
// Get request to send all traffic to the index html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});


// Get request to send all trafic that enters /notes to the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;