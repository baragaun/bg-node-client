/**
 * A simple TypeScript logger that uses the console with support for multiple log levels.
 */
import { Logger } from '../types/logger.js';
declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    FATAL = 4,
    NONE = 5
}
interface LoggerConfig {
    level: LogLevel;
    showTimestamp: boolean;
    showLogLevel: boolean;
    prefix?: string;
}
/**
 * Simple TypeScript logger that wraps console methods
 */
declare class DefaultLogger implements Logger {
    private config;
    /**
     * Create a new Logger instance
     * @param config - Logger configuration options
     */
    constructor(config?: Partial<LoggerConfig>);
    /**
     * Format the log message with optional timestamp and level
     * @param level - The log level of the message
     * @param message - The message to log
     * @param args - Additional arguments to log
     * @returns Formatted message parts
     */
    private formatMessage;
    /**
     * Log a debug message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    debug(message: any, ...args: any[]): void;
    /**
     * Log an info message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    info(message: any, ...args: any[]): void;
    /**
     * Log a warning message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    warn(message: any, ...args: any[]): void;
    /**
     * Log an error message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    error(message: any, ...args: any[]): void;
    /**
     * Log a fatal error message
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    fatal(message: any, ...args: any[]): void;
    /**
     * Update logger configuration
     * @param config - New configuration options to apply
     */
    updateConfig(config: Partial<LoggerConfig>): void;
    /**
     * Create a child logger with a specific prefix
     * @param prefix - Prefix to add to all log messages
     * @returns A new Logger instance with the specified prefix
     */
    child(prefix: string): DefaultLogger;
}
declare let logger: Logger | DefaultLogger;
export declare const setLogger: (newLogger: Logger) => void;
declare const setLogLevel: (level: "debug" | "info" | "warn" | "error" | "fatal" | "silent") => void;
export default logger;
export { DefaultLogger, LogLevel, LoggerConfig, setLogLevel, };
