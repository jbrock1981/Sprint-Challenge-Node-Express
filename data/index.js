//server setup
const express = require('express');
const action = require('./actions');
const projects = require('./projects');
const server = express();
const PORT = 4200;

//middleware

server.use(express.json());

//custom middleware

server.use('/actions', action);

//listen
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})