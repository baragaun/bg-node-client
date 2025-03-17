import { DefaultLogger, LogLevel } from './DefaultLogger.js';
const config = {
    level: LogLevel.DEBUG,
    showTimestamp: false,
    showLogLevel: false,
};
let logger = new DefaultLogger(config);
export const setLogger = (newLogger) => {
    logger = newLogger;
};
export default logger;
//# sourceMappingURL=logger.js.map