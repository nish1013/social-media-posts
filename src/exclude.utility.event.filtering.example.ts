/**
 * TypeScript Example: Enhanced Event Handling with Exclude Utility
 *
 * Demonstrates the use of TypeScript's Exclude utility for handling different
 * event types with structured data and robust error handling.
 */

// Union type for different event kinds
export type Event =
  | { kind: 'userEvent'; id: number; data: Record<string, unknown> }
  | { kind: 'systemEvent'; id: number; data: Record<string, unknown> }
  | { kind: 'errorEvent'; id: number; error: Error };

// Using Exclude to create a type excluding 'errorEvent'
type NonErrorEvent = Exclude<Event, { kind: 'errorEvent' }>;

// Function to process non-error events
function processEvent(event: NonErrorEvent) {
  switch (event.kind) {
    case 'userEvent':
      console.log(`Handling user event with ID ${event.id}`, event.data);
      break;
    case 'systemEvent':
      console.log(`Handling system event with ID ${event.id}`, event.data);
      break;
    default:
      // Exhaustive type checking using 'never'
      const exhaustiveCheck: never = event;
      throw new Error(`Unhandled event kind: ${exhaustiveCheck}`);
  }
}

// Example usage
const userEvent: Event = {
  kind: 'userEvent',
  id: 101,
  data: { name: 'John Doe' }
};

processEvent(userEvent); // Valid for non-error events
