interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Tablet', price: 299.99 },
  ];
  
  // Suppose you want to format the products for display,
  // adding a currency symbol and 
  // rounding the price to two decimal places.
  const formattedProducts = products.map((product) => ({
    ...product,
    price: `$${product.price.toFixed(2)}`,
  }));
  
  console.log(formattedProducts);
// Output
/* [
    { id: 1, name: 'Laptop', price: '$999.99' },
    { id: 2, name: 'Smartphone', price: '$499.99' },
    { id: 3, name: 'Tablet', price: '$299.99' }
  ] */
  