const server = require('./api/server.js')

const PORT = process.env.Port || 5000;

server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
});