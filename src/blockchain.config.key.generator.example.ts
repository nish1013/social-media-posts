/**
 * Blockchain Configuration Keys Generation Example
 *
 * This example code demonstrates the usage of TypeScript template literal types
 * to generate structured and type-safe configuration keys for a blockchain system.
 * The generated keys follow a specific pattern based on environments (prod, dev),
 * blockchains (Ethereum, Solana), and configurations (node, wallet).
 */

// Define environments
export type Environment = 'prod' | 'dev';

// Define blockchains
export type Blockchain = 'ethereum' | 'solana';

// Define configurations
export type Config = 'node' | 'wallet';

// Template literal type to generate structured configuration keys
export type ConfigKey = `/${Environment}/${Blockchain}/${Config}/config`;

// Function to generate configuration keys based on environment,
// blockchain, and configuration
function generateConfigKey(
  environment: Environment,
  blockchain: Blockchain,
  config: Config
): ConfigKey {
  // Add runtime checks/validations as per the requirements
  return `/${environment}/${blockchain}/${config}/config`;
}

// Example usage of the function
const prodEthNodeConfigKey: ConfigKey = generateConfigKey(
  'prod',
  'ethereum',
  'node'
);
const devSolWalletConfigKey: ConfigKey = generateConfigKey(
  'dev',
  'solana',
  'wallet'
);

// Output generated configuration keys
console.log({ prodEthNodeConfigKey, devSolWalletConfigKey });
// Output: { prodEthNodeConfigKey: '/prod/ethereum/node/config',
// devSolWalletConfigKey: '/dev/solana/wallet/config' }
