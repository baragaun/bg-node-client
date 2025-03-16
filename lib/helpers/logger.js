import winston from 'winston';
let logger = undefined;
export const setLogger = (newLogger) => {
    logger = newLogger;
};
const level = process.env.LOG_LEVEL || 'debug';
logger = winston.createLogger({
    level,
    format: winston.format.json(),
    defaultMeta: { service: 'bg-node-client' },
    transports: [
        new winston.transports.Console({
            format: winston.format.json(),
        }),
    ],
});
logger.debug('Logger initialized', { level });
export default logger;
//# sourceMappingURL=logger.js.map