/**
 * TypeScript Example: Union Types vs. Base Pattern
 *
 * This example compares union types and the base pattern in TypeScript,
 * applied to common operations in banking, such as deposits, withdrawals,
 * and transfers.
 */

// V1: Union Approach

export interface DepositV1 {
  id: number;
  amount: number;
  source: 'Bank' | 'Online'; // Specific to Deposit
}

export interface WithdrawalV1 {
  id: number;
  amount: number;
  method: 'ATM' | 'Cheque'; // Specific to Withdrawal
}

export interface TransferV1 {
  id: number;
  amount: number;
  mode: 'BACS' | 'CHAPS'; // Specific to Tranfer
}

export function processV1(payment: DepositV1 | WithdrawalV1 | TransferV1) {
  console.log(`Processing payment with ID: ${payment.id}`);
  // Type-specific logic can be added as needed
}

// V2: Base Pattern Approach

export interface PaymentBaseV2 {
  id: number;
  amount: number;
}

export interface DepositV2 extends PaymentBaseV2 {
  source: 'Bank' | 'Online'; // Specific to Deposit
}

export interface WithdrawalV2 extends PaymentBaseV2 {
  method: 'ATM' | 'Cheque'; // Specific to Withdrawal
}

export interface TransferV2 extends PaymentBaseV2 {
  mode: 'BACS' | 'CHAPS'; // Specific to Transfer
}

export function processV2(payment: PaymentBaseV2) {
  console.log(`Processing payment with ID: ${payment.id}`);
  // Type-specific logic can be added as needed
}

// Example Usage
const depositV1: DepositV1 = { id: 1, amount: 100, source: 'Bank' };
const withdrawalV1: WithdrawalV1 = { id: 2, amount: 50, method: 'ATM' };
const transferV1: TransferV1 = { id: 3, amount: 150, mode: 'BACS' };
processV1(depositV1);
processV1(withdrawalV1);
processV1(transferV1);

const depositV2: DepositV2 = { id: 4, amount: 200, source: 'Online' };
const withdrawalV2: WithdrawalV2 = { id: 5, amount: 75, method: 'Cheque' };
const transferV2: TransferV2 = { id: 6, amount: 300, mode: 'CHAPS' };
processV2(depositV2);
processV2(withdrawalV2);
processV2(transferV2);
