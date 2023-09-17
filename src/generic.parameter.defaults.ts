// Define a union type for different log levels.
type LogLevel = "info" | "warning" | "error";

// Define a log entry structure that includes the log level, timestamp, and data.
type LogEntry<T extends LogLevel, D> = {
  level: T; // The log level, e.g., 'info', 'warning', or 'error'.
  timestamp: Date; // The timestamp when the log entry is created.
  data: D; // The log data of type D.
};

// Define a configuration interface for the FileLogger class.
type FileLoggerConfig = {
  filePath: string; // The file path where log entries will be written.
  locale?: string; // An optional locale for formatting timestamps.
};

// Generic Parameter Defaults: Here, we set 'string' as the default data type parameter.
// This means that if no data type is specified when creating a FileLogger instance,
// it will assume 'string' as the default data type for log data.

// FileLogger: A class for logging messages to a file.
class FileLogger<D = string> {
  private filePath: string; // The file path where log entries will be written.
  private locale: string; // The locale for formatting timestamps.

  constructor(config: FileLoggerConfig) {
    this.filePath = config.filePath;
    this.locale = config.locale || "en-GB"; // Default locale is 'en-GB'.
  }

  // Log method: Records a log entry with the specified log level and data.
  log<T extends LogLevel>(level: T, data: D): void {
    const entry: LogEntry<T, D> = {
      level,
      timestamp: new Date(), // Get the current timestamp.
      data,
    };

    // Simulating writing to a file using this.filePath.
    // We format the log entry with the timestamp, log level, and data.
    console.log(
      `Writing to file ${this.filePath}: [${entry.timestamp.toLocaleString(
        this.locale
      )}] [${entry.level}]`,
      entry.data
    );
  }
}

// Usage example:

// Create a FileLogger instance with default data type 'string'.
const logger = new FileLogger({ filePath: "app.log" });

// Log messages with different log levels and data.
logger.log("info", "This is an informational message.");
logger.log("error", "This is an error message.");

// Using index signature to define the shape of log data.
// The 'LogData' interface allows us to specify log data with flexible keys
// and values. It's defined with an index signature, which means it can have
// properties with keys of any string and values of type 'string' or 'number'.
// This provides a way to log structured data with dynamic keys and various value types.
interface LogData {
  [key: string]: string | number;
}

// Create a FileLogger instance with log data of type 'LogData'.
const loggerLogData = new FileLogger<LogData>({ filePath: "app.log" });

// Log structured data with dynamic keys and various value types.
loggerLogData.log("info", { prop1: "value1", prop2: "value2" });
loggerLogData.log("error", { prop3: "value3", prop4: 0.0001 });
