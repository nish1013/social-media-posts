/**
 * This module defines interfaces and types for handling transactions in a
 * system, including both fiat and cryptocurrency transactions. It also
 * provides a type predicate function for type narrowing to ensure type-safe
 * operations on specific transaction types.
 */

import BigNumber from 'bignumber.js';

/**
 * BaseTransaction defines the common properties shared by all transactions.
 */
export interface BaseTransaction {
  id: number; // Unique identifier for the transaction
  currency: string; // The currency in which the transaction is made (e.g., USD, ETH)
  amount: BigNumber; // The amount involved in the transaction
}

/**
 * FiatTransaction extends BaseTransaction to represent fiat currency transactions.
 * Includes an optional `fee` property for transaction-specific charges.
 */
export interface FiatTransaction extends BaseTransaction {
  fee?: BigNumber; // Optional fee associated with the fiat transaction
}

/**
 * CryptoTransaction extends BaseTransaction to represent cryptocurrency transactions.
 */
export interface CryptoTransaction extends BaseTransaction {
  gas: BigNumber; // The gas fees associated with the cryptocurrency transaction
}

/**
 * Transaction is a union type representing either a FiatTransaction or a CryptoTransaction.
 */
export type Transaction = FiatTransaction | CryptoTransaction;

/**
 * Type predicate to check if a given transaction is a CryptoTransaction.
 *
 * @param transaction - The transaction to check.
 * @returns `true` if the transaction is a CryptoTransaction, `false` otherwise.
 */
export function isCryptoTransaction(
  transaction: Transaction
): transaction is CryptoTransaction {
  return 'gas' in transaction; // Checks if the 'gas' property exists in the transaction
}

// Example usage of the transaction types and type guard

// Create a sample FiatTransaction with an optional fee
const fiatTransaction: FiatTransaction = {
  id: 1,
  currency: 'USD',
  amount: new BigNumber(100.5),
  fee: new BigNumber(2.5), // Optional fee
};

// Create a sample CryptoTransaction (ETH example)
const cryptoTransaction: CryptoTransaction = {
  id: 2,
  currency: 'ETH',
  amount: new BigNumber(0.5),
  gas: new BigNumber(0.002),
};

// Function to process transactions
function processTransaction(transaction: Transaction) {
  if (isCryptoTransaction(transaction)) {
    console.log(
      `Processing CryptoTransaction with ID ${
        transaction.id
      }: Amount = ${transaction.amount.toString()} ${
        transaction.currency
      }, Gas fee = ${transaction.gas.toString()}`
    );
  } else {
    console.log(
      `Processing FiatTransaction with ID ${
        transaction.id
      }: Amount = ${transaction.amount.toString()} ${transaction.currency}${
        transaction.fee ? `, Fee = ${transaction.fee.toString()}` : ''
      }`
    );
  }
}

// Process the transactions
processTransaction(fiatTransaction); // Output: Processing FiatTransaction with ID 1: Amount = 100.50 USD, Fee = 2.5
processTransaction(cryptoTransaction); // Output: Processing CryptoTransaction with ID 2: Amount = 0.5 ETH, Gas fee = 0.002
