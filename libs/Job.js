const _ = require('lodash');

const Log = require('./Logger');

class Job {
  constructor(data) {
    this._data = _.defaults(data, {
      socketId: '',
      mime: '',
      stdin: '',
      source: '',
      timeLimit: 5,
      memoryLimit: 128,
      state: 'wait',
      stdout: '',
      stderr: '',
      maximumMemoryUsage: 0,
      executionTime: 0,
    });
  }

  set(key, value) {
    if(key in this._data) {
     this._data[key] = value;
    } else {
      throw Error(`there is no key:${key} in Job`);
    }
  }

  get(key){
    if(key in this._data) {
      return this._data[key];
    } else {
      throw Error(`there is no key:${key} in Job`);
    }
  }
}

module.exports = exports = new Job();
exports.default = Job;

