import winston, { Logger } from 'winston';

let logger: Logger | undefined = undefined;

export const setLogger = (newLogger: Logger): void => {
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

export default logger as unknown as Logger;
