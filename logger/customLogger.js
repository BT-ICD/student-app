const winston = require('winston');
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [new winston.transports.Console()],
  });

// const customLogger = () => {
//     const myFormat = printf(({ level, message, timestamp }) => {
//         return `${timestamp} ${level}: ${message}`;
//       });
    
//     return createLogger({
//         level: 'info',//winston.config.npm.levels,//'debug',
//         // format: winston.format.simple(),
//         format: combine(
//             format.colorize(),
//             label({ label: 'right meow!' }),
//             timestamp({format: "HH:mm:ss"}),
//             myFormat
//           ),
    
//         //defaultMeta: { service: 'user-service' },
        // transports: [
        //     new transports.Console(),
        //     new transports.File({
        //         filename: 'errors.log',
                
        //       }),
        //       new transports.File({
        //         filename: 'combined.log',
                
        //       })
        // ],
//       });
// }
module.exports =logger;