const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Sports',
  },
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Furniture',
  },
 
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;