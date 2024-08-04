/**
 * Utility type to replace userId with customerId in existing platform types.
 * This is useful for scenarios where external systems require a different identifier.
 */

// Utility type definition
export type WithCustomerId<T extends { userId: string }> = Omit<T, 'userId'> & {
  customerId: string;
};

// Example existing types in your platform
export interface PlatformOrder {
  userId: string;
  id: string;
  amount: number;
  createTime: Date;
}

export interface PlatformBonus {
  userId: string;
  id: string;
  points: number;
  createTime: Date;
}

// Transformed types for external integration
export type ExternalOrder = WithCustomerId<PlatformOrder>;
export type ExternalBonus = WithCustomerId<PlatformBonus>;

// Usage examples
const externalOrder: ExternalOrder = {
  id: 'ORD789',
  amount: 150,
  createTime: new Date(),
  customerId: 'C123456'
};

const externalBonus: ExternalBonus = {
  id: 'BON456',
  points: 500,
  createTime: new Date(),
  customerId: 'C123456'
};
