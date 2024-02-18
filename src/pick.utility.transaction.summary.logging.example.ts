/**
 * TypeScript Example: Simplifying Data with Pick Utility
 *
 * This example showcases how to use TypeScript's Pick utility to extract
 * specific properties from a complex type for focused operations like logging.
 * It demonstrates defining a TransactionReceipt type and logging only essential
 * details (txHash and status), promoting data privacy and efficiency.
 */

export interface TransactionReceipt {
  txHash: string;
  status: boolean;
  blockNumber: number;
  gasUsed: number;
  // Additional properties can be added here
}

// Selectively extracting txHash and status using Pick
export type TransactionSummary = Pick<TransactionReceipt, 'txHash' | 'status'>;

function logTransactionSummary(receipt: TransactionSummary) {
  // Logs a concise summary of the transaction
  console.log(`Transaction Hash: ${receipt.txHash}, Status: ${receipt.status}`);
}

// Example usage with a sample transaction receipt
const receipt: TransactionReceipt = {
  txHash: '0x123...',
  status: true,
  blockNumber: 123456,
  gasUsed: 21000,
  // other values
};

logTransactionSummary(receipt); // Output focused on txHash and status
