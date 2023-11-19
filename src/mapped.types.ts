/**
 * This TypeScript example demonstrates using a mapped type to represent the state
 * (enabled/disabled) of various features in a platform. It's common in feature flag
 * systems used to toggle features on and off in a dynamic and type-safe manner.
 */

// Enum representing different features of the platform.
enum Feature {
  UserAuthentication = 'UserAuthentication',
  PaymentProcessing = 'PaymentProcessing',
  AdvancedAnalytics = 'AdvancedAnalytics',
  RealtimeNotifications = 'RealtimeNotifications'
}

/**
 * Mapped Type for Feature States
 *
 * Converts the keys of the Feature enum into a type where
 * each key corresponds to a feature. For each key
 * (representing a feature), the value is a boolean
 * indicating if the feature is enabled.
 *
 * This approach uses the keys of the enum (e.g.,
 * 'UserAuthentication'), not the enum values, ensuring
 * stability even if the underlying enum values change.
 */
type FeatureStates = {
  [F in keyof typeof Feature]: boolean;
};

// Creating an object to represent the current state of each feature.
const featureStates: FeatureStates = {
  UserAuthentication: true,
  PaymentProcessing: false,
  AdvancedAnalytics: true,
  RealtimeNotifications: true
};

// Accessing the state of a specific feature
console.log('Is Payment Processing Enabled?', featureStates.PaymentProcessing); // Output: false
