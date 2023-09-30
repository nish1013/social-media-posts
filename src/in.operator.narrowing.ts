// Define a common set of properties for all messages.
type CommonMessageProperties = {
  timestamp: Date;
};

// Define the TextMessage type with additional properties.
type TextMessage = {
  content: string;
  sender: string;
  sendText: (message: string) => void;
} & CommonMessageProperties;

// Define the ImageMessage type with additional properties.
type ImageMessage = {
  imageUrl: string;
  sender: string;
  viewImage: (url: string) => void;
} & CommonMessageProperties;

// Define a union type for message types.
type Message = TextMessage | ImageMessage;

// Function to process and display messages.
function displayMessage(message: Message) {
  // Check if the 'sendText' property exists in the message.
  if ('sendText' in message) {
    console.log(`Text Message from ${message.sender}: ${message.content}`);
    // Call the 'sendText' function.
    message.sendText('Thanks for the message!');
  } else if ('viewImage' in message) {
    // This branch is executed if 'viewImage' property is found
    console.log(`Image Message from ${message.sender}: ${message.imageUrl}`);
    // Call the 'viewImage' function.
    message.viewImage(message.imageUrl);
  } else {
    // Throw an error for unsupported message types.
    throw new Error('Unsupported message type');
  }
}

// Example usage:
const textMessage: TextMessage = {
  timestamp: new Date(),
  sender: 'John Doe',
  content: 'Hello, how are you?',
  sendText: (response) => {
    console.log(`Sending text response: ${response}`);
  },
};

const imageMessage: ImageMessage = {
  timestamp: new Date(),
  sender: 'Jane Doe',
  imageUrl: 'https://example.com/image.jpg',
  viewImage: (url) => {
    console.log(`Opening image ${url}...`);
  },
};

// Display messages
displayMessage(textMessage);
displayMessage(imageMessage);
