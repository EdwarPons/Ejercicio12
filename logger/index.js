const winston = require("winston");

const levels = { // RFC 5424
 error: 0,
 warn: 1,
 info: 2,
 http: 3,
 verbose: 4,
 debug: 5,
 silly: 6
};

const logger = winston.createLogger({
 level: 'info',
 format: winston.format.json(),
 // defaultMeta: { service: 'user-service'},
 transports: [
  new winston.transports.Console(),
  new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  new winston.transports.File({ filename: 'logs/combined.log' })
 ],
});

module.exports = logger;