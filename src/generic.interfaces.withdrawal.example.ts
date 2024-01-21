/**
 * TypeScript Example: Using Generic Interfaces for Withdrawal Processing
 *
 * This example demonstrates how to use generic interfaces in TypeScript to handle
 * different types of withdrawals, such as bank and cryptocurrency withdrawals.
 * The generic interface allows for flexible and type-safe handling of various withdrawal details.
 */

// Generic interface for a withdrawal
export interface Withdrawal<T> {
  amount: number;
  details: T;
}

// Specific types of withdrawal details
export interface BankWithdrawalDetails {
  bankName: string;
  accountNumber: string;
}

export interface CryptoWithdrawalDetails {
  cryptocurrency: string;
  walletAddress: string;
}

// Function to process bank withdrawals
function processBankWithdrawal(withdrawal: Withdrawal<BankWithdrawalDetails>) {
  console.log(
    `Processing bank withdrawal of ${withdrawal.amount} from ${withdrawal.details.bankName}`
  );
}

// Function to process cryptocurrency withdrawals
function processCryptoWithdrawal(
  withdrawal: Withdrawal<CryptoWithdrawalDetails>
) {
  console.log(
    `Processing crypto withdrawal of ${withdrawal.amount} in ${withdrawal.details.cryptocurrency}`
  );
}

// Usage examples
const bankWithdrawal: Withdrawal<BankWithdrawalDetails> = {
  amount: 1000,
  details: {
    bankName: 'Example Bank',
    accountNumber: '123456789'
  }
};

const cryptoWithdrawal: Withdrawal<CryptoWithdrawalDetails> = {
  amount: 0.01,
  details: {
    cryptocurrency: 'Bitcoin',
    walletAddress: '1ABC2DEF3GHI4JKL5MNO6PQR'
  }
};

processBankWithdrawal(bankWithdrawal);
processCryptoWithdrawal(cryptoWithdrawal);
