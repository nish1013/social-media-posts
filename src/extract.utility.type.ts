/**
 * TypeScript Example: Dynamic Event Type Extraction
 *
 * Demonstrates using TypeScript's Extract to dynamically create specific
 * event handler types from a PlatformEvent union. The main advantage is
 * the automatic update of extracted types when new events are added to
 * PlatformEvent, eliminating manual type adjustments.
 */

// Interface for data in data-related events
export interface Data {
  key: string;
  value: string;
}

// Union type for various events in a platform
export type PlatformEvent =
  | { type: 'UserLogin'; user: string }
  | { type: 'UserLogout'; user: string }
  | { type: 'SystemError'; error: Error }
  | { type: 'DataCreate'; data: Data }
  | { type: 'DataDelete'; data: Data };

// Dynamically extract data-related events from PlatformEvent
export type DataEvent = Extract<PlatformEvent, { data: Data }>;

// Dynamically extract error-related events from PlatformEvent
export type ErrorEvent = Extract<PlatformEvent, { error: Error }>;

// Function to handle data events
function handleDataEvent(event: DataEvent) {
  console.log(
    `Handling data event ${event.type} for key: ${event.data.key}, value: ${event.data.value}`
  );
}

// Function to handle error events
function handleErrorEvent(event: ErrorEvent) {
  console.log(
    `Handling error event: ${event.type}, error: ${event.error.message}`
  );
}
