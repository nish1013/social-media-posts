/**
 * TypeScript Example: Customizable Logging with Parameterized Method Decorators
 *
 * Demonstrates the use of parameterized method decorators for customizable logging in a backend application.
 * The `LogApiRequest` decorator accepts a configuration object, allowing for different logging behaviors
 * based on the specified log level and message. This approach provides flexibility and enhances method functionality.
 */

export interface LogConfig {
  level: 'debug' | 'info' | 'error'; // Log level
  message?: string; // Optional custom log message
}

/**
 * LogApiRequest decorator factory.
 *
 * Creates a method decorator for logging based on a given configuration.
 * The decorator can be customized to log different levels and messages,
 * depending on the requirements of each method it decorates.
 *
 * @param {LogConfig} config - An object specifying the log level and an optional custom message.
 * @returns A decorator function that enhances a method with the specified logging behavior.
 */
function LogApiRequest(config: LogConfig) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    // Enhanced method with logging
    descriptor.value = function (...args: any[]) {
      // Implement custom logic here to handle different log levels if needed
      const logMessage =
        config.message || `API Request to method: ${propertyKey}`;
      console.log(
        `[${config.level}] ${logMessage}, with args: ${JSON.stringify(args)}`
      );

      // Call the original method with its original context and arguments
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

export interface Transaction {
  transactionId: string;
  amount: number;
}

export class TransactionService {
  // Example usage of the LogApiRequest decorator with configuration
  @LogApiRequest({ level: 'info', message: 'Processing transaction' })
  processTransaction(transaction: Transaction) {
    // Business logic to process a transaction
    console.log(`Transaction processed: ${transaction.transactionId}`);
  }

  @LogApiRequest({ level: 'error' })
  cancelTransaction(transactionId: string) {
    // Business logic to cancel a transaction
    console.log(`Transaction cancelled: ${transactionId}`);
  }
}

const transactionService = new TransactionService();
transactionService.processTransaction({ transactionId: 'tx123', amount: 100 });
transactionService.cancelTransaction('tx123');
