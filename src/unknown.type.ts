/**
 * This module provides utilities for validating and retrieving
 * data based on specified validation criteria.
 */

// Type alias for a validator function.
// Takes an unknown data type and determines if it is of type T.
type Validator<T> = (data: unknown) => data is T;

// Custom error class for validation failures.
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Class responsible for retrieving data that meets specified validation criteria
class ValidatedDataRetriever<T> {
  // Initializes a new instance with a validator function for type T.
  constructor(private readonly validator: Validator<T>) { }

  // Validates the data based on the given validator function.
  // Returns the data if valid; otherwise, throws an error.
  getValidated(data: unknown): T | never {
    if (this.validator(data)) {
      return data;
    } else {
      throw new ValidationError(`Invalid schema for data ${JSON.stringify(data)}.`);
    }
  }
}

// Interface for the configuration schema.
interface ConfigSchema {
  host: string;
  port: number;
}

// Validator function to ensure a given data object conforms to the ConfigSchema.
const isConfigSchema = (data: unknown): data is ConfigSchema => {
  if (typeof data !== 'object' || data === null) {
    return false;
  }
  // Cast the data to a more minimal type for the properties we are interested in.
  const obj = data as { host?: unknown, port?: unknown };

  return typeof obj.host === 'string' && typeof obj.port === 'number';
};

// Validator function to check if a given data is a string.
const isString = (data: unknown): data is string => {
  return typeof data === 'string';
}

// Create instances of ValidatedDataRetriever with specific validator functions.
const configValidator = new ValidatedDataRetriever<ConfigSchema>(isConfigSchema);
const stringValidator = new ValidatedDataRetriever<string>(isString);

// Simulated config data from a JSON file, database, or third-party API that we need to validate.
const unsafeConfig: unknown = {
  host: 'localhost',
  port: 3000
};

// Validate and retrieve the configuration data if it is valid.
try {
  const validatedConfig = configValidator.getValidated(unsafeConfig);
  console.log('Validated config:', validatedConfig);
} catch (e) {
  console.error(e);
}

// Data that is expected to be a string but hasn't been validated.
const unsafeString: unknown = 123;

// Validate and retrieve the string data if it is valid.
try {
  const validatedString = stringValidator.getValidated(unsafeString);
  console.log('Validated string:', validatedString);
} catch (e) {
  console.error(e);
}