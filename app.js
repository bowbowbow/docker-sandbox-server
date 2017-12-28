// Common Modules...
const Express = require('express');
const http = require('http');
const domain = require('domain').create();

// express setting
const app = Express();
require('./express')(app);

process.env.TZ = 'Asia/Seoul';

const httpServer = http.createServer(app);
domain.on('error', (err) => {
  console.log('unhandled error : ' + err);
});
domain.run(() => {
  httpServer.listen(8080);
});
