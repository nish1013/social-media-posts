/**
 * This TypeScript example demonstrates the use of nominal typing with unique symbols.
 * It includes the definition of User and Product entities with nominal types for their IDs,
 * DTOs (Data Transfer Objects) for these entities, and functions to convert between
 * DTOs and domain models, showcasing how nominal typing can be enforced in TypeScript.
 */

// Create unique symbols to simulate nominal typing for User and Product IDs
const UserIdBrand = Symbol('UserId');
const ProductIdBrand = Symbol('ProductId');

// Define UserId and ProductId types with nominal typing using intersection types and the unique symbols.
// Note: The '__brand' property is a convention for simulating nominal typing in TypeScript and is not a language feature.
type UserId = string & { readonly __brand: typeof UserIdBrand };
type ProductId = string & { readonly __brand: typeof ProductIdBrand };

// Define User and Product interfaces with nominal typing for their respective IDs
export interface User {
  readonly id: UserId;
  name: string;
}

export interface Product {
  readonly id: ProductId;
  name: string;
  price: number;
}

// DTO (Data Transfer Object) interfaces for User and Product without nominal typing
interface UserDTO {
  id: string;
  name: string;
}

interface ProductDTO {
  id: string;
  name: string;
  price: number;
}

// Function to convert a UserDTO to a User, casting the ID to ensure nominal typing
function fromUserDto(userDto: UserDTO): User {
  return {
    id: userDto.id as UserId,
    name: userDto.name,
  };
}

// Function to convert a User back to a UserDTO
function toUserDto(user: User): UserDTO {
  return {
    id: user.id,
    name: user.name,
  };
}

// Function to convert a ProductDTO to a Product, casting the ID to ensure nominal typing
function fromProductDto(productDto: ProductDTO): Product {
  return {
    id: productDto.id as ProductId,
    name: productDto.name,
    price: productDto.price,
  };
}

// Function to convert a Product back to a ProductDTO
function toProductDto(product: Product): ProductDTO {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
  };
}

// Usage example, simulating fetching data from an API or database
const userDtoApi: UserDTO = { id: 'user-1', name: 'John Doe' };
const productDtoApi: ProductDTO = {
  id: 'product-123',
  name: 'Laptop',
  price: 1500,
};

// Convert from DTO to domain model, enforcing nominal typing
const user = fromUserDto(userDtoApi);
const product = fromProductDto(productDtoApi);

console.log(user, product);

// Convert from domain model back to DTO
const userDto = toUserDto(user);
const productDto = toProductDto(product);

console.log(userDto, productDto);
