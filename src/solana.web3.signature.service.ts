/**
 * TypeScript Example: A service for signing and verifying messages using
 * Solana's cryptography.
 *
 * This service demonstrates how to sign a message with a Solana keypair
 * and verify the signature, incorporating a nonce for enhanced security
 * and uniqueness of each message. Note: For high-security applications,
 * consider using a more secure randomness source for nonce generation.
 */

import nacl from 'tweetnacl';
import { encode as encodeToBase58, decode as decodeFromBase58 } from 'bs58';
import { decodeUTF8 } from 'tweetnacl-util';
import { Keypair, PublicKey } from '@solana/web3.js';

export interface SignatureService {
  signMessage(message: string, signingKey: string): string;
  verifySignature(
    message: string,
    publicKey: string,
    signature: string
  ): boolean;
}

export class SolanaSignatureService implements SignatureService {
  /**
   * Signs a message using a secret key.
   * @param message - The message to sign.
   * @param signingKey - The signing key in Base58 encoding.
   * @returns The signature as a Base58 encoded string.
   * @throws Error if signing fails due to an invalid key or other issues.
   */
  public signMessage(message: string, signingKey: string): string {
    const signingKeyUint8 = decodeFromBase58(signingKey);
    if (signingKeyUint8.length !== nacl.sign.secretKeyLength) {
      throw new Error('Invalid signing key length');
    }
    const messageUint8 = decodeUTF8(message);
    const signatureUint8 = nacl.sign.detached(messageUint8, signingKeyUint8);
    return encodeToBase58(signatureUint8);
  }

  /**
   * Verifies the signature of a message.
   * @param message - The message to verify.
   * @param publicKey - The public key in Base58 encoding.
   * @param signature - The signature in Base58 encoding.
   * @returns true if the signature is valid, false otherwise.
   * @throws Error if verification fails due to an invalid public key or other issues.
   */
  public verifySignature(
    message: string,
    publicKey: string,
    signature: string
  ): boolean {
    const publicKeyObj = this.getValidPublicKey(publicKey);

    const messageUint8 = decodeUTF8(message);
    const publicKeyUint8 = publicKeyObj.toBuffer();
    const signatureUint8 = decodeFromBase58(signature);

    return nacl.sign.detached.verify(
      messageUint8,
      signatureUint8,
      publicKeyUint8
    );
  }

  private getValidPublicKey(publicKeyString: string): PublicKey {
    try {
      const publicKeyObj = new PublicKey(publicKeyString);
      if (!PublicKey.isOnCurve(publicKeyObj)) {
        throw new Error('Public key is not on the ed25519 curve.');
      }
      return publicKeyObj;
    } catch (error) {
      throw new Error(
        `Invalid publicKey: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}

// Example usage

// For demonstration purposes: generate a unique nonce for message verification
const nonce = Math.random().toString(36).substring(2, 15);
const message = `Hello, Solana! Nonce: ${nonce}`;

const keypair = Keypair.generate(); // Generate a new keypair for signing
const signingKey = encodeToBase58(keypair.secretKey); // Encode the secret key

const signatureService = new SolanaSignatureService();

try {
  // Sign the message using the secret key
  const signatureBase58 = signatureService.signMessage(message, signingKey);

  // Encode the public key to Base58 for verification
  const publicKeyBase58 = keypair.publicKey.toBase58();

  // Test the verification of the signature
  const isValid = signatureService.verifySignature(
    message,
    publicKeyBase58,
    signatureBase58
  );
  console.log(`Is the signature valid? ${isValid}`);
} catch (error) {
  console.error('An error occurred:', error);
}
