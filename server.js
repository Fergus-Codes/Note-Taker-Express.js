const express = require('express');
const apiRouter = require('./routers/APIRoutes');
const htmlRouter = require('./routers/HTMLRoutes');
const PORT = 3001
const app = express()


app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'))
app.use(apiRouter)
app.use(htmlRouter)
app.use(express.json());




app.listen(PORT, (request, response)=> {
 console.log(`App is listening on https://localhost:${PORT}`)
})

