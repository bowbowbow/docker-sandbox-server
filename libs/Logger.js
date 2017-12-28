const winston = require('winston');
const moment = require('moment');
const path = require('path');
const fs = require('fs');

const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const debugLogPath = path.join(__dirname, '../logs/debug.log');
const errorLogPath = path.join(__dirname, '../logs/error.log');

/**
 * Log Level
 * { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 */

const Logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      name: 'info-console',
      level: 'info',
      colorize: true,
      prettyPrint: true,
      timestamp: () => {
        return moment().format('YYYY-MM-DD HH:mm:ss.SSS');
      },
    }),
    new winston.transports.File({
      name: 'debug-file',
      level: 'debug',
      json: false,
      filename: debugLogPath,
      colorize: false,
      prettyPrint: true,
      timestamp: () => {
        return moment().format('YYYY-MM-DD HH:mm:ss.SSS');
      },
    }),
    new winston.transports.File({
      name: 'error-file',
      level: 'error',
      json: false,
      filename: errorLogPath,
      colorize: false,
      prettyPrint: true,
      timestamp: () => {
        return moment().format('YYYY-MM-DD HH:mm:ss.SSS');
      },
    }),
  ],
});

Logger.setLevels(winston.config.syslog.levels);
Logger.exitOnError = false;

module.exports = exports = Logger;
