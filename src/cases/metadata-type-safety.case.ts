/**
 * This file demonstrates the difference between using `any` and `unknown` types in TypeScript
 * when handling metadata or dynamic objects. The example highlights why starting with `unknown`
 * is a better practice than defaulting to `any`, as it enforces type validation and safer coding practices.
 *
 * Key Concepts:
 * - `any` allows bypassing type checks, leading to potential runtime errors.
 * - `unknown` enforces type validation, encouraging safer and more predictable behavior.
 */

// Define a type for metadata with an index signature
export interface Metadata {
  [key: string]: any; // Using 'any' allows any type of value without checks
}

// Example using 'any' - bypasses type safety, leading to potential errors
function getMetadataValueAny(meta: Metadata, key: string): string {
  // Assumes the value is a string without any validation
  // Validation is not enforced by the compiler due to the use of 'any'
  return meta[key].toUpperCase(); // Risky operation, as the value could be any type
}

// Usage example with 'any'
try {
  const meta = { title: 'TypeScript Any Type', count: 42 };
  console.log(getMetadataValueAny(meta, 'title')); // Output: "TYPESCRIPT ANY TYPE"
  console.log(getMetadataValueAny(meta, 'count')); // Runtime error: meta[key].toUpperCase is not a function
} catch (error) {
  console.error('Error with any:', error);
}

// Improved approach using 'unknown' - enforces validation and type safety
export interface SafeMetadata {
  [key: string]: unknown; // Using 'unknown' prompts you to validate the type
}

function getMetadataValueUnknown(meta: SafeMetadata, key: string): string {
  const value = meta[key];

  // Validate the type before using the value
  // This validation is enforced by the compiler since the type is 'unknown'
  if (typeof value === 'string') {
    return value.toUpperCase(); // Safe to use after validating the type
  }

  throw new Error(
    `Expected a string for key "${key}", but got ${typeof value}`
  );
}

// Usage example with 'unknown'
try {
  const meta = { title: 'TypeScript Unknown Type', count: 42 };
  console.log(getMetadataValueUnknown(meta, 'title')); // Output: "TYPESCRIPT UNKNOWN TYPE"
  console.log(getMetadataValueUnknown(meta, 'count')); // Throws error: Expected a string for key "count"
} catch (error) {
  console.error('Error with unknown:', error);
}
