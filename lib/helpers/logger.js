// Define log levels and their corresponding numeric values
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["FATAL"] = 4] = "FATAL";
    LogLevel[LogLevel["NONE"] = 5] = "NONE";
})(LogLevel || (LogLevel = {}));
const LOG_LEVEL_MAPPING = {
    debug: LogLevel.DEBUG,
    info: LogLevel.INFO,
    warn: LogLevel.WARN,
    error: LogLevel.ERROR,
    fatal: LogLevel.FATAL,
    silent: LogLevel.NONE,
};
/**
 * Simple TypeScript logger that wraps console methods
 */
class DefaultLogger {
    config;
    /**
     * Create a new Logger instance
     * @param config - Logger configuration options
     */
    constructor(config) {
        this.config = {
            level: LogLevel.INFO,
            showTimestamp: true,
            showLogLevel: true,
            prefix: '',
            ...config,
        };
    }
    /**
     * Format the log message with optional timestamp and level
     * @param level - The log level of the message
     * @param message - The message to log
     * @param args - Additional arguments to log
     * @returns Formatted message parts
     */
    formatMessage(level, message, ...args) {
        let formattedMessage = '';
        // Add timestamp if configured
        if (this.config.showTimestamp) {
            formattedMessage += `[${new Date().toISOString()}] `;
        }
        // Add log level if configured
        if (this.config.showLogLevel) {
            formattedMessage += `[${LogLevel[level]}] `;
        }
        // Add prefix if set
        if (this.config.prefix) {
            formattedMessage += `[${this.config.prefix}] `;
        }
        // Handle string messages vs objects
        if (typeof message === 'string') {
            formattedMessage += message;
            return [formattedMessage, ...args];
        }
        else {
            return [formattedMessage, message, ...args];
        }
    }
    /**
     * Log a debug message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    debug(message, ...args) {
        if (this.config.level <= LogLevel.DEBUG) {
            console.debug(...this.formatMessage(LogLevel.DEBUG, message, ...args));
        }
    }
    /**
     * Log an info message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    info(message, ...args) {
        if (this.config.level <= LogLevel.INFO) {
            console.info(...this.formatMessage(LogLevel.INFO, message, ...args));
        }
    }
    /**
     * Log a warning message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    warn(message, ...args) {
        if (this.config.level <= LogLevel.WARN) {
            console.warn(...this.formatMessage(LogLevel.WARN, message, ...args));
        }
    }
    /**
     * Log an error message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    error(message, ...args) {
        if (this.config.level <= LogLevel.ERROR) {
            console.error(...this.formatMessage(LogLevel.ERROR, message, ...args));
        }
    }
    /**
     * Log a fatal error message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    fatal(message, ...args) {
        if (this.config.level <= LogLevel.FATAL) {
            console.error(...this.formatMessage(LogLevel.FATAL, message, ...args));
        }
    }
    /**
     * Update logger configuration
     * @param config - New configuration options to apply
     */
    updateConfig(config) {
        this.config = {
            ...this.config,
            ...config,
        };
    }
    /**
     * Create a child logger with a specific prefix
     * @param prefix - Prefix to add to all log messages
     * @returns A new Logger instance with the specified prefix
     */
    child(prefix) {
        return new DefaultLogger({
            ...this.config,
            prefix: this.config.prefix
                ? `${this.config.prefix}:${prefix}`
                : prefix,
        });
    }
}
let logger = new DefaultLogger();
export const setLogger = (newLogger) => {
    logger = newLogger;
};
const setLogLevel = (level) => {
    if (logger instanceof DefaultLogger) {
        const transformedLevel = LOG_LEVEL_MAPPING[level];
        logger.updateConfig({ level: transformedLevel || LogLevel.ERROR });
    }
};
export default logger;
export { DefaultLogger, LogLevel, setLogLevel, };
//# sourceMappingURL=logger.js.map