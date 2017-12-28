const _ = require('lodash');

class Queue {
  constructor() {
    this.queue = [];
  }

  init() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  push (job) {
    this.queue.push(job);
  }

  front () {
    return this.queue[0];
  }

  pop () {
    this.queue.shift();
  }
}

module.exports = exports = new Queue();
exports.default = Queue;

