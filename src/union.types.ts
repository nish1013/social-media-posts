/**
 * TypeScript Example: Handling Different Types of Notifications
 *
 * This example demonstrates the use of Union Types to handle different formats of notifications.
 * The 'Notification' type can be either a simple string or a structured object with a title and message.
 * The 'sendNotification' function illustrates how to process these different types.
 */

// Union Type for Notification: string or an object with title and message
export type Notification = string | { title: string; message: string };

/**
 * Sends a notification based on the provided input.
 * Handles both simple text notifications and structured notifications with a title and message.
 *
 * @param notification - The notification to send, can be a string or an object with title and message.
 */
function sendNotification(notification: Notification) {
  // Check if the notification is a string or an object and handle accordingly
  if (typeof notification === 'string') {
    console.log(`Sending text notification: ${notification}`);
  } else {
    console.log(
      `Sending structured notification
        Title: ${notification.title}, 
        Message: ${notification.message}`
    );
  }
}

// Example usage of the function with different types of notifications
sendNotification('Server is up and running.');
sendNotification({
  title: 'Welcome',
  message: 'Thank you for joining our platform!'
});
