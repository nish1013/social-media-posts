/**
 * AppConfig: Immutable Application Configuration
 * This configuration object uses `const` assertions to ensure all settings
 * are readonly and their types are inferred as literals. It's designed for
 * settings that should remain constant throughout the application's lifecycle.
 */

// Define the application configuration with const assertion for immutability
const AppConfig = {
  // Environment setting (e.g., 'development', 'staging', 'production')
  environment: 'production',

  // Feature toggle settings
  featureToggles: {
    enableNewUI: true, // Toggle for enabling new UI features
    enableLogging: false, // Toggle for enabling logging
  },

  // API endpoint settings
  apiEndpoints: {
    getUser: '/api/user', // Endpoint for fetching user data
    postComment: '/api/comment', // Endpoint for posting a comment
  },
} as const;

// Type derived from AppConfig using const assertion for precise type inference
type AppConfigType = typeof AppConfig;

/**
 * Initializes the application with the given configuration.
 * @param config - AppConfigType: The readonly application configuration object.
 */
function initializeApp(config: AppConfigType) {
  console.log(`Running in ${config.environment} environment`);

  // Logic to handle feature toggles
  if (config.featureToggles.enableNewUI) {
    console.log('New UI is enabled');
  }

  // Additional initialization logic based on the configuration...
}

// Initialize the application with the immutable configuration object
initializeApp(AppConfig);
