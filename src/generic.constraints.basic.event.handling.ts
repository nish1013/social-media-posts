/**
 * Example: Generic Handling of Payment Events from Various Providers
 *
 * Demonstrates a generic event processor for handling payment events from
 * different providers using generic constraints. This approach ensures
 * type safety and flexibility in processing diverse payment event structures.
 *
 * A more advanced implementation could use a mapper function to
 * standardize provider-specific data into a consistent format for the platform.
 */

// Base interface for PaymentEvent
// Acts as a contract for all payment events, regardless of the provider.
interface PaymentEvent {
  transactionId: string;
  amount: number;
}

// Provider-specific event types extending the base PaymentEvent
// Include additional details unique to each payment provider.
interface PayPalPaymentEvent extends PaymentEvent {
  paypalSpecificInfo: string;
}

interface StripePaymentEvent extends PaymentEvent {
  stripeSpecificInfo: string;
}

// Generic Payment Event Handler
// Uses a generic constraint (T extends PaymentEvent) to ensure that the function
// can handle any event type that conforms to the PaymentEvent structure.
function handlePaymentEvent<T extends PaymentEvent>(event: T) {
  console.log(
    `Processing payment: Transaction ID ${event.transactionId}, Amount: ${event.amount}`
  );
  // Here, additional processing logic can be added.
}

// Example Usage with different provider-specific event types
const paypalEvent: PayPalPaymentEvent = {
  transactionId: 'paypal123',
  amount: 200,
  paypalSpecificInfo: 'PayPal info here',
};

const stripeEvent: StripePaymentEvent = {
  transactionId: 'stripe456',
  amount: 150,
  stripeSpecificInfo: 'Stripe info here',
};

// Handling events with the generic processor
handlePaymentEvent(paypalEvent); // Processes a PayPal-specific event
handlePaymentEvent(stripeEvent); // Processes a Stripe-specific event
