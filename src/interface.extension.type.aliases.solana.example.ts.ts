/**
 * TypeScript Example: Handling Solana RPC Responses with Precision
 *
 * Enhances code readability using interface extension and type aliases,
 * focusing on Solana's `getSignatureStatuses`. Demonstrates organizing
 * complex data effectively. For detailed API info, visit the Solana
 * documentation.
 *
 * More info: https://solana.com/docs/rpc/http/getsignaturestatuses
 */

export interface BaseResponse {
  jsonrpc: string;
  id: number;
}

export interface SignatureStatusesResponse extends BaseResponse {
  result: {
    context: RpcResponseContext;
    value: Array<RpcResponse | null>;
  };
}

export interface RpcResponseContext {
  slot: number; // Mandatory slot field.
  // Allows additional properties.
  [key: string]: unknown;
}

export interface RpcResponse {
  slot: number;
  confirmations: number | null;
  err: TransactionError | null;
  confirmationStatus: ConfirmationStatus | null;
  // Deprecated status object
  status?: { Ok?: null; Err?: string };
}

export interface TransactionError {
  message: string; // Simplified error representation
}

export type ConfirmationStatus = 'processed' | 'confirmed' | 'finalized';

function processResponse(response: SignatureStatusesResponse) {
  // Implementation details can be added here...
  console.log('Processing Solana Signature Statuses Response:', response);
}

// Example usage
const response: SignatureStatusesResponse = {
  jsonrpc: '2.0',
  result: {
    context: {
      apiVersion: '1.17.21',
      slot: 282454202,
    },
    value: [
      {
        confirmationStatus: 'finalized',
        confirmations: 4,
        err: null,
        slot: 282448607,
        status: {
          Ok: null,
        },
      },
      {
        confirmationStatus: 'confirmed',
        confirmations: null,
        err: null,
        slot: 282453935,
        status: {
          Ok: null,
        },
      },
    ],
  },
  id: 1,
};

processResponse(response);
