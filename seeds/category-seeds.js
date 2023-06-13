const { Category } = require('../models');

const categoryData = [
  {
    Category_name: 'Sports',
  },
  {
    Category_name: 'Electronics',
  },
  {
    Category_name: 'Furniture',
  },
 
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;