const queue = require('./Queue');
const Job = require('./Job').default;
const Log = require('./Logger');

class Socket {
  constructor() {
    this.io = null;
  }
  init(io) {
    this.io = io;
    this.io.on('connection', (socket) => {
      try {
        socket.on('run', (data) => {
          Log.notice(data);
          this.runHandler(data, socket);
        });
      } catch (err) {
        Log.error(err);
      }
    });
  }
  runHandler (data, socket) {
    const job = new Job({
      socketId: socket.id,
    });
    queue.push(job);
  }
  sendResult (data, socketId) {
    try {
      this.io.sockets.connected(socketId).emit("topic", data);
    } catch (err) {
      Log.error(err);
    }
  }
}

module.exports = exports = new Socket();
exports.default = Socket;

