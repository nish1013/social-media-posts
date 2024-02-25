/**
 * TypeScript Example: Flexible Blockchain Contract Metadata Handling with Index
 * Signatures
 *
 * This example showcases flexible metadata handling in TypeScript for blockchain
 * contracts. Using index signatures, it allows for objects with various property
 * types, making it versatile for different data structures. Key properties such
 * as address, name, and tokenType are defined, while additional properties can
 * be dynamically included, demonstrating adaptability for real-world applications.
 */

// Defining a flexible metadata structure using an index signature
export interface ContractMetadata {
  // Common properties
  address: string;
  name: string;
  tokenType: 'ERC721' | 'ERC20';
  // More properties can be dynamically added
  [key: string]: string | number | boolean | null | Record<string, unknown>;
}

function logBasicContractMetadata(metadata: ContractMetadata) {
  console.log(
    `Contract Name: ${metadata.name}, Token Type: ${metadata.tokenType}`
  );
}

const exampleMetadata: ContractMetadata = {
  address: '0x123...',
  name: 'ExampleNFT',
  tokenType: 'ERC721',
  totalSupply: 1000, // Demonstrates adding numeric property
  isVerified: true, // Demonstrates adding boolean property
  // Additional properties can be added as needed
};

logBasicContractMetadata(exampleMetadata);
