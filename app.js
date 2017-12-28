// Common Modules...
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const domain = require('domain').create();

process.env.TZ = 'Asia/Seoul';

const Socket = require('./libs/Socket');

server.listen(8080);

domain.on('error', (err) => {
  console.log('unhandled error : ' + err);
});
domain.run(() => {
  Socket.init(io);
});
