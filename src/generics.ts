// Define a generic Repository class that works with any data type T
// with an id property
class Repository<T extends { id: number }> {
    private readonly data: T[] = [];
  
    // Add an item of type T to the repository
    add(item: T): void {
      this.data.push(item);
    }
  
    // Get all items in the repository as an array of type T
    getAll(): T[] {
      return this.data;
    }
  
    // Find an item in the repository by its ID and return it if found, otherwise undefined
    // The type constraint 'T extends { id: number }' ensures that 'T' has an 'id' property of type 'number'
    findById(id: number): T | undefined {
      return this.data.find((item) => item.id === id);
    }
  }
  
  // Define a Product type using an interface to represent the structure of product data
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  // Create a repository for products using the generic Repository class
  const productRepository = new Repository<Product>();
  
  // Add products to the repository
  productRepository.add({ id: 1, name: 'Widget', price: 19.99 });
  productRepository.add({ id: 2, name: 'Gadget', price: 29.99 });
  
  // Retrieve all products from the repository
  const allProducts = productRepository.getAll();
  console.log('All Products:', allProducts);
  
  // Find a product in the repository by its ID
  const productById = productRepository.findById(1);
  console.log('Product by ID:', productById);
  