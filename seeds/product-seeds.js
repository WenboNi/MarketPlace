const { Product } = require('../models');

const productData = [
    {
      product_name: 'Plain T-Shirt',
      price: 14.99,
      category_id: 1,
      condition: 5,
      city: 'New York',
      contact_info: 'example@example.com',
      description: 'A plain t-shirt for everyday wear.',
    },
    {
      product_name: 'Running Shoes',
      price: 79.99,
      category_id: 1,
      condition: 7,
      city: 'Los Angeles',
      contact_info: 'example@example.com',
      description: 'High-performance running shoes.',
    },
    {
      product_name: 'Laptop',
      price: 999.99,
      category_id: 2,
      condition: 9,
      city: 'San Francisco',
      contact_info: 'example@example.com',
      description: 'A powerful and portable laptop.',
    },
    {
      product_name: 'Sofa',
      price: 499.99,
      category_id: 3,
      condition: 8,
      city: 'Chicago',
      contact_info: 'example@example.com',
      description: 'A comfortable sofa for your living room.',
    },
    {
      product_name: 'Smartphone',
      price: 699.99,
      category_id: 2,
      condition: 6,
      city: 'Miami',
      contact_info: 'example@example.com',
      description: 'A feature-packed smartphone.',
    },
  ];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;