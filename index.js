//server setup
const express = require('express');
const actions = require('./actions');
const projectRouter = require('./projects');
const server = express();
const PORT = 4200;

//middleware

server.use(express.json());

//custom middleware

server.use('/actions', actions);
server.use('/projects', projectRouter);

//listen
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})