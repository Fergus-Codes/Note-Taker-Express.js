//! Importing required modules and declaring port #
// require express to perform server functionality
const express = require('express');
// require the routers that have been created in the routers directory
const apiRouter = require('./routers/APIRoutes');
const htmlRouter = require('./routers/HTMLRoutes');
//Declare port number for localhost 
const PORT = 3001
// Create an instance of expressJS
const app = express()


//! Setting Middleware 
//Allow server to recieve data
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// Set the root directory as the 'public' directory
app.use(express.static('public'))
// Set the two routers created in the routers directory to be used as middleware.
app.use(apiRouter)
app.use(htmlRouter)





//! Setting a listener to allow the server to activate
app.listen(PORT, (request, response)=> {
 console.log(`App is listening on https://localhost:${PORT}`)
})

