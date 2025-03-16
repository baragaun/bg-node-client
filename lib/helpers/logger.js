import winston from 'winston';
let logger = undefined;
export const setLogger = (newLogger) => {
    // if (logger) {
    //   logger.close();
    // }
    logger = newLogger;
};
const level = process.env.LOG_LEVEL || 'debug';
logger = winston.createLogger({
    level,
    format: winston.format.json(),
    defaultMeta: { service: 'bg-node-client' },
    transports: [
        //
        // - Write all logs with importance level of `error` or higher to `error.log`
        //   (i.e., error, fatal, but not other levels)
        //
        // new winston.transports.File({ filename: 'error.log', level: 'error' }),
        //
        // - Write all logs with importance level of `info` or higher to `combined.log`
        //   (i.e., fatal, error, warn, and info, but not trace)
        //
        // new winston.transports.File({
        //   filename: process.env.LOG_FILE || 'servicepulse.log',
        // }),
        new winston.transports.Console({
            format: winston.format.json(),
        }),
    ],
});
logger.debug('Logger initialized', { logLevel: level });
export default logger;
//# sourceMappingURL=logger.js.map