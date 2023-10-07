// Define a type for a generic object with an "id" property
type Entity = {
  id: number;
};

// Define a type for a specific entity, which extends the generic Entity type
type UserEntity = Entity & {
  username: string;
};

type ProductEntity = Entity & {
  productName: string;
  price: number;
};

// A function that checks if an object is a UserEntity
function isUserEntity(entity: Entity): entity is UserEntity {
  return 'username' in entity;
}

// A function that checks if an object is a ProductEntity
function isProductEntity(entity: Entity): entity is ProductEntity {
  return 'productName' in entity && 'price' in entity;
}

// Example objects
const userObject = { id: 1, username: 'john_doe' };
const productObject = { id: 2, productName: 'Laptop', price: 999 };

// Function that uses type predicates to narrow down the object type
function processEntity(entity: Entity) {
  if (isUserEntity(entity)) {
    // Now TypeScript knows that entity is a UserEntity
    console.log(`User: ${entity.username}`);
  } else if (isProductEntity(entity)) {
    // Now TypeScript knows that entity is a ProductEntity
    console.log(`Product: ${entity.productName}, Price: $${entity.price}`);
  } else {
    // Fallback case
    console.log(`Unknown entity with ID: ${entity.id}`);
  }
}

// Calling the function with different objects
processEntity(userObject); // Output: User: john_doe
processEntity(productObject); // Output: Product: Laptop, Price: $999
