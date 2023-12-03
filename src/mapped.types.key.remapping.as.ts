/**
 * TypeScript Configuration Paths Example
 *
 * This script demonstrates the use of TypeScript's advanced type features to create
 * type-safe configuration paths for different stages of an application. It utilizes
 * Enums to define stages, Mapped Types to generate specific configuration keys, and
 * Key Remapping via `as` to create descriptive key names.
 */

// Define an enum for different stages of the application.
enum Stage {
  Development = 'development',
  Staging = 'staging',
  Production = 'production'
}

// Define a mapped type that uses the Stage enum to create specific configuration path keys.
type ConfigPaths = {
  // The keyof typeof Stage retrieves the keys of the Stage enum ('Development', 'Staging', 'Production').
  // `${typeof Stage[K]}_config` then accesses the actual string literal value (e.g., 'development', 'staging', 'production')
  // of each enum member, and remaps these values to form new string literals like 'development_config'.
  [K in keyof typeof Stage as `${typeof Stage[K]}_config`]: string;
};

// Implement the ConfigPaths type to define actual paths for each configuration.
const config: ConfigPaths = {
  development_config: '/path/to/dev/config',
  staging_config: '/path/to/staging/config',
  production_config: '/path/to/prod/config'
};

// Example of accessing a specific configuration path.
const devConfigPath = config.development_config;
console.log(devConfigPath); // Outputs: '/path/to/dev/config'
