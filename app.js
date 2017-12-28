// Common Modules...
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const domain = require('domain').create();

process.env.TZ = 'Asia/Seoul';

const Socket = require('./libs/Socket');
const Log = require('./Logger');

server.listen(8080);

domain.on('error', (err) => {
  Log.error('unhandled error : ', err);
});
domain.run(() => {
  Socket.init(io);
});
