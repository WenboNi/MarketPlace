const { Product } = require("../models");

const productData = [
  {
    product_name: "Plain T-Shirt",
    category: "sports",
    price: 14.99,
    item_condition: 5,
    city: "New York",
    contact_info: "6456899999",
    item_description: "A plain t-shirt for everyday wear.",
    stock: 1,
    image: "assets/image/plain_t-shirt.jpg",
    user_id: 1
  },
  {
    product_name: "Running Sneakers",
    category: "sports",
    price: 90.0,
    item_condition: 8,
    city: "Los Angeles",
    contact_info: "6543219876",
    item_description: "High-performance running sneakers.",
    stock: 2,
    image: "assets/image/running_sneakers.jpg",
    user_id: 1
  },
  {
    product_name: "Branded Baseball Hat",
    category: "sports",
    price: 22.99,
    item_condition: 6,
    city: "Chicago",
    contact_info: "9876543210",
    item_description: "A stylish baseball hat with a brand logo.",
    stock: 3,
    image: "assets/image/branded_baseball_hat.jpg",
    user_id: 1
  },
  {
    product_name: "Wooden Coffee Table",
    category: "furnitures",
    price: 199.99,
    item_condition: 9,
    city: "New York",
    contact_info: "6456899999",
    item_description: "A beautiful wooden coffee table for your living room.",
    stock: 1,
    image: "assets/image/wooden_coffee_table.jpg",
    user_id: 2
  },
  {
    product_name: "Leather Sofa",
    category: "furnitures",
    price: 799.0,
    item_condition: 8,
    city: "Los Angeles",
    contact_info: "6543219876",
    item_description: "A luxurious leather sofa for ultimate comfort.",
    stock: 1,
    image: "assets/image/leather_sofa.jpg",
    user_id: 2
  },
  {
    product_name: "Modern Dining Set",
    category: "furnitures",
    price: 599.99,
    item_condition: 7,
    city: "Chicago",
    contact_info: "9876543210",
    item_description: "A sleek and stylish dining set for your home.",
    stock: 1,
    image: "assets/image/modern_dining_set.jpg",
    user_id: 2
  },
  {
    product_name: 'Smartphone',
    category: "electronics",
    price: 799.99,
    item_condition: 10,
    city: 'San Francisco',
    contact_info: "1234567890",
    item_description: 'The latest smartphone with advanced features.',
    stock: 1,
    image: 'assets/image/smartphone.jpg',
    user_id: 3
  },
  {
    product_name: 'Laptop',
    category: "electronics",
    price: 1299.0,
    item_condition: 9,
    city: 'Seattle',
    contact_info: "9876543212",
    item_description: 'A powerful laptop for all your computing needs.',
    stock: 1,
    image: 'assets/image/laptop.jpg',
    user_id: 3
  },
  {
    product_name: 'Wireless Earphones',
    category: "electronics",
    price: 99.99,
    item_condition: 8,
    city: 'Miami',
    contact_info: "4567891230",
    item_description: 'High-quality wireless earphones for immersive audio.',
    stock: 1,
    image: 'assets/image/wireless_earphones.jpg',
    user_id: 4
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
