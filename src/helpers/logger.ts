import { DefaultLogger, LoggerConfig, LogLevel } from './DefaultLogger.js';
import { Logger } from '../types/logger.js';

const config: LoggerConfig = {
  level: LogLevel.DEBUG,
  showTimestamp: false,
  showLogLevel: false,
}

let logger: Logger = new DefaultLogger(config);

export const setLogger = (newLogger: Logger): void => {
  logger = newLogger;
};

export default logger;
