/**
 * TypeScript Example: Enforcing Immutability with Readonly<Type>
 *
 * This example demonstrates the use of `Readonly<Type>` in TypeScript to ensure the 
 * immutability of user settings in a backend application. Functions to load and 
 * display user settings are provided, highlighting the read-only nature of the data.
 */

interface UserSettings {
  darkMode: boolean;
  emailNotifications: boolean;
  dashboardLayout: string;
  // ... other settings
}

/**
 * Loads user settings and marks them as readonly to prevent modifications.
 *
 * @param userId - The ID of the user for whom settings are to be loaded.
 * @returns A Readonly version of UserSettings.
 */
function loadUserSettings(userId: string): Readonly<UserSettings> {
  // Simulate fetching settings from a database or configuration file
  return {
    darkMode: true,
    emailNotifications: false,
    dashboardLayout: 'compact'
  };
}

/**
 * Displays the user settings, ensuring they are not modified.
 *
 * @param settings - The user settings to display, marked as readonly.
 */
function displayUserSettings(settings: Readonly<UserSettings>): void {
  console.log(`User Settings for User: `, settings);
  // Note: The 'settings' object is readonly and cannot be modified
}

// Demonstrating the loading and displaying of user settings
const userSettings = loadUserSettings('user123');
displayUserSettings(userSettings);
