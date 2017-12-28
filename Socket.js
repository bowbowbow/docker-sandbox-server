
class Socket {
  constructor() {
    this.io = null;
  }
  init(io) {
    this.io = io;
    this.io.on('connection', (socket) => {
      try {
        socket.on('run', (data) => {
          console.log(data);
          this.runHandler(data, socket);
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
  runHandler (data, socket) {

  }
}

module.exports = exports = new Socket();
exports.default = Socket;

