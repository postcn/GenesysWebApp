'use strict';

const app = require('./app');

const PORT = process.env.PORT || 9000;

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', require('./sockets'));

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});