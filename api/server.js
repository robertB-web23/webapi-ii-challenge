express = require('express');

const server = express();

const postsRouter = require('../router.js')

//Router


//Middleware

server.use(express.json())

server.use('/api/posts', postsRouter)


module.exports = server;