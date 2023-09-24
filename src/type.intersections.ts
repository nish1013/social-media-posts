// Define a base user type with common properties.
type BaseUser = {
  id: number;
  username: string;
  email: string;
};

// Define user roles with their respective permissions.
type Admin = {
  role: 'admin';
  permissions: string[];
};

type Moderator = {
  role: 'moderator';
  permissions: string[];
};

type Member = {
  role: 'member';
};

// Define a type intersection to create a user type with roles and permissions.
export type User = BaseUser & (Admin | Moderator | Member);

// Create user objects.
const adminUser: User = {
  id: 1,
  username: 'admin123',
  email: 'admin@example.com',
  role: 'admin',
  permissions: ['create', 'update', 'delete']
};

const moderatorUser: User = {
  id: 2,
  username: 'moderator456',
  email: 'moderator@example.com',
  role: 'moderator',
  permissions: ['update']
};

const memberUser: User = {
  id: 3,
  username: 'member789',
  email: 'member@example.com',
  role: 'member'
};

// Function to check if a user has a specific permission.
function hasPermission(user: User, permission: string): boolean {
  if ('permissions' in user && user.permissions.includes(permission)) {
    return true;
  }
  return false;
}

// Example usage:
console.log(hasPermission(adminUser, 'create')); // true
console.log(hasPermission(moderatorUser, 'delete')); // false
console.log(hasPermission(memberUser, 'update')); // false
