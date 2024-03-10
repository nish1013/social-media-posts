/**
 * TypeScript Example: Ethereum Blockchain Interactions via Classes
 *
 * This example highlights TypeScript's class features through a `BlockchainWallet`
 * class for Ethereum transactions. It demonstrates encapsulation of blockchain
 * operations, such as balance checking and transaction sending, using Ethers.js.
 * This serves as a practical demonstration of TypeScript
 * classes in real-world blockchain applications.
 */

import { ethers, Wallet } from 'ethers';

export interface TransactionDetails {
  toAddress: string;
  amount: number;
}

export class BlockchainWallet {
  private readonly address: string; // Wallet address
  private readonly signer: Wallet; // Wallet signer for transactions
  private readonly provider: ethers.JsonRpcProvider; // Connection to the Ethereum network

  constructor(address: string, privateKey: string, providerUrl: string) {
    // Initializing wallet with address, private key, and provider URL
    this.address = address; // Your wallet address
    this.provider = new ethers.JsonRpcProvider(providerUrl); // URL to Ethereum node
    this.signer = new Wallet(privateKey, this.provider); // Create a signer with your private key
  }

  async checkBalance(): Promise<string> {
    const balance = await this.provider.getBalance(this.address);
    return ethers.formatEther(balance);
  }

  async sendTransaction(txDetails: TransactionDetails): Promise<string> {
    const transaction = await this.signer.sendTransaction({
      to: txDetails.toAddress,
      value: ethers.parseEther(txDetails.amount.toString()),
    });
    return transaction.hash;
  }
}

// Example usage with placeholders for your details
const address = 'YOUR_WALLET_ADDRESS';
const privateKey = 'YOUR_PRIVATE_KEY';
const providerUrl = 'YOUR_PROVIDER_URL'; // E.g., Infura or Alchemy URL
const toAddress = 'RECIPIENT_ADDRESS';
const myWallet = new BlockchainWallet(address, privateKey, providerUrl);

async function main() {
  const balance = await myWallet.checkBalance();
  console.log(`Balance: ${balance} ETH`);

  const txHash = await myWallet.sendTransaction({ toAddress, amount: 0.01 });
  console.log(`Transaction Hash: ${txHash}`);
}

main().catch(console.error);
