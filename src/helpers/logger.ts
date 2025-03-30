/**
 * A simple TypeScript logger that uses the console with support for multiple log levels.
 */
import { Logger } from '../types/logger.js';

// Define log levels and their corresponding numeric values
enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4,
  NONE = 5,
}

// Logger configuration interface
interface LoggerConfig {
  level: LogLevel;
  showTimestamp: boolean;
  showLogLevel: boolean;
  prefix?: string;
}

const LOG_LEVEL_MAPPING = {
  debug: LogLevel.DEBUG,
  info: LogLevel.INFO,
  warn: LogLevel.WARN,
  error: LogLevel.ERROR,
  fatal: LogLevel.FATAL,
  silent: LogLevel.NONE,
}

/**
 * Simple TypeScript logger that wraps console methods
 */
class DefaultLogger implements Logger {
  private config: LoggerConfig;

  /**
   * Create a new Logger instance
   * @param config - Logger configuration options
   */
  constructor(config?: Partial<LoggerConfig>) {
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
  private formatMessage(level: LogLevel, message: any, ...args: any[]): [string, ...any[]] {
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
    } else {
      return [formattedMessage, message, ...args];
    }
  }

  /**
   * Log a debug message
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  debug(message: any, ...args: any[]): void {
    if (this.config.level <= LogLevel.DEBUG) {
      console.log(...this.formatMessage(LogLevel.DEBUG, message, ...args));
    }
  }

  /**
   * Log an info message
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  info(message: any, ...args: any[]): void {
    if (this.config.level <= LogLevel.INFO) {
      console.log(...this.formatMessage(LogLevel.INFO, message, ...args));
    }
  }

  /**
   * Log a warning message
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  warn(message: any, ...args: any[]): void {
    if (this.config.level <= LogLevel.WARN) {
      console.log(...this.formatMessage(LogLevel.WARN, message, ...args));
    }
  }

  /**
   * Log an error message
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  error(message: any, ...args: any[]): void {
    if (this.config.level <= LogLevel.ERROR) {
      console.error(...this.formatMessage(LogLevel.ERROR, message, ...args));
    }
  }

  /**
   * Log a fatal error message
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  fatal(message: any, ...args: any[]): void {
    if (this.config.level <= LogLevel.FATAL) {
      console.error(...this.formatMessage(LogLevel.FATAL, message, ...args));
    }
  }

  /**
   * Update logger configuration
   * @param config - New configuration options to apply
   */
  updateConfig(config: Partial<LoggerConfig>): void {
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
  child(prefix: string): DefaultLogger {
    return new DefaultLogger({
      ...this.config,
      prefix: this.config.prefix
        ? `${this.config.prefix}:${prefix}`
        : prefix,
    });
  }
}

let logger: Logger | DefaultLogger = new DefaultLogger();

export const setLogger = (newLogger: Logger): void => {
  logger = newLogger;
};

const setLogLevel = (level: 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'silent'): void => {
  if (logger instanceof DefaultLogger) {
    let transformedLevel = LOG_LEVEL_MAPPING[level];
    if (isNaN(transformedLevel) || transformedLevel < 0 || transformedLevel > LogLevel.FATAL) {
      transformedLevel = LogLevel.ERROR;
    }
    logger.updateConfig({ level: transformedLevel });
    logger.debug("BgNodeClient: log level set.", { level });
  }
};

export default logger;

export {
  DefaultLogger,
  LogLevel,
  LoggerConfig,
  setLogLevel,
};
