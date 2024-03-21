/**
 * TypeScript Example: Interacting with Optimism L2
 *
 * Demonstrates using TypeScript for secure and efficient blockchain interactions on
 * Ethereum's Optimism Layer 2. Utilizes the Viem library for operations like transaction
 * sending and account management, with an emphasis on type-safe error handling.
 * This example is a practical guide to developing robust blockchain applications
 * on L2 platforms with TypeScript.
 */

import {
  PrivateKeyAccount,
  createWalletClient,
  http,
  isAddress,
  parseEther,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { optimism, optimismSepolia } from 'viem/chains';

export interface WalletClient {
  sendTransaction(to: string, amount: string): Promise<string>;
}

export interface WalletClientConfig {
  rpcUrl: string;
  privateKey: string;
  environment?: Environment;
}

export type Environment = 'prod' | 'dev';

export class OptimismWalletClient implements WalletClient {
  private readonly client;
  private readonly account: PrivateKeyAccount;

  constructor({ rpcUrl, privateKey, environment = 'dev' }: WalletClientConfig) {
    this.client = createWalletClient({
      chain: environment === 'prod' ? optimism : optimismSepolia,
      transport: http(rpcUrl),
    });

    this.account = privateKeyToAccount(`0x${privateKey}`);
  }

  async sendTransaction(to: string, amount: string): Promise<string> {
    if (!isAddress(to)) {
      throw new Error('Invalid "to" address format.');
    }

    const value = parseEther(amount); // Convert amount to a bigint Ethereum unit
    const hash = await this.client.sendTransaction({
      account: this.account,
      to,
      value,
    });
    return hash; // Returns the transaction hash
  }
}

async function main() {
  // Placeholder values should be replaced with actual RPC URL, private key, and recipient address
  const config: WalletClientConfig = {
    rpcUrl: 'YOUR_RPC_URL', // E.g., Alchemy URL
    privateKey: 'YOUR_PRIVATE_KEY',
    environment: 'dev', // Optional: Specify 'prod' or 'dev'
  };
  const to = 'RECIPIENT_ADDRESS';

  const walletClient: WalletClient = new OptimismWalletClient(config);

  try {
    const hash = await walletClient.sendTransaction(to, '0.001');
    console.log(`Transaction hash: ${hash}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error sending transaction:', error.message);
    } else {
      console.error('An unexpected error occurred');
    }
  }
}

main().catch((error) => console.error('Error in main:', error.message));
