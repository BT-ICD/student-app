// const {logger} = require('./customLogger');
const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.Console(),
            new winston.transports.File({
                filename: 'errors.log',
                
              }),
              new winston.transports.File({
                filename: 'combined.log',
                
              })
        ]
  });
// let myLogger = null;
// myLogger = logger;
module.exports = logger;