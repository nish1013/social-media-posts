/**
 * TypeScript Example: Logging API Requests using Method Decorators
 *
 * Demonstrates the use of a method decorator in a backend application to log transaction handling.
 * The `LogApiRequest` decorator is applied to service methods, enabling automatic logging
 * of each request they handle, which is particularly useful for monitoring transaction operations.
 */

/**
 * Decorator for logging transaction handling.
 * It logs the method name and arguments whenever the decorated method is called.
 *
 * @param target - The prototype of the class containing the method.
 * @param propertyKey - The name of the method being decorated.
 * @param descriptor - The descriptor of the method being decorated.
 * @returns The modified descriptor with enhanced functionality (added logging).
 */
function LogApiRequest(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  // Modifying the method descriptor to include logging
  descriptor.value = function (...args: any[]) {
    // Logging the method call and its arguments
    console.log(
      `API Request to method: ${propertyKey}, with args: ${JSON.stringify(
        args
      )}`
    );
    // Calling the original method with its original context ('this') and arguments ('args')
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

export interface Transaction {
  transactionId: string;
  amount: number;
  currency: string;
}

// Example service class using the LogApiRequest decorator in a backend application
export class TransactionService {
  // Applying the decorator to processTransaction method
  @LogApiRequest
  processTransaction(transaction: Transaction) {
    // Business logic to process a transaction
    console.log(`Transaction processed: ${transaction.transactionId}`);
  }

  // Applying the decorator to cancelTransaction method
  @LogApiRequest
  cancelTransaction(transactionId: string) {
    // Business logic to cancel a transaction
    console.log(`Transaction cancelled: ${transactionId}`);
  }
}

// Demonstrating how the service class is used
const transactionService = new TransactionService();
transactionService.processTransaction({
  transactionId: 'tx123',
  amount: 100,
  currency: 'USD',
});
transactionService.cancelTransaction('tx123');
