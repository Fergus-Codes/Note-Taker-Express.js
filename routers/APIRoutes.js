//Create a router called API_Router to handle all routing of for /API & create an instance of it.
const router = require('express').Router()
// Require fs(nodejs file system) to allow us to read and write
const fs = require('fs')
// Require uuid to allow us to assign a unique ID to each request.
const uuid = require('../helpers/uuid')



//! All request handlers for API Routes

router.get('/api/notes', async (req, res) => {
    const jsonGetDB = await JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    res.json(jsonGetDB)
})

router.post('/api/notes', (req, res) => {

    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    };

// Push the new note into the db.json file
const jsonPostDB = JSON.parse(fs.readFileSync('./db/db.json'))
        jsonPostDB.push(note)

    // creat a constant with the jsonDB, parse
    fs.writeFileSync('./db/db.json', JSON.stringify(jsonPostDB))
   res.json(jsonPostDB)

})

router.delete('/api/notes/:id', (req, res) => {
    let dbdata = fs.readFileSync('./db/db.json');
    const JSONdbdata = JSON.parse(dbdata);
    const newNote = JSONdbdata.filter((note) => {
    return note.id !== req.params.id;
});
fs.writeFileSync("./db/db.json", JSON.stringify(newNote));
res.json("The note has been deleted!");
});


module.exports = router;