// Define an interface for items in the shopping cart
interface ShoppingCartItem {
    name: string;
    price: number;
}

// Define an array of items in the shopping cart with their prices
const shoppingCart: ShoppingCartItem[] = [
    { name: 'Shirt', price: 25 },
    { name: 'Jeans', price: 50 },
    { name: 'Shoes', price: 80 },
    { name: 'Hat', price: 15 }
];

// Use the reduce function to calculate the total price 
// of items in the shopping cart
// The callback function takes two arguments: 
// 'total' (accumulator) and 'item' (current item)
const totalPrice: number = shoppingCart.reduce((total: number, item: ShoppingCartItem) => {
    // Accumulate the price of the current item to the running total
    return total + item.price;
}, 0); // 0 is the initial value of the accumulator

// Output the total price of all items in the shopping cart
console.log(`Total Price: $${totalPrice}`);
