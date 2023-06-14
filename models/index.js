// import all models

const User = require('./Product');
const Landscape = require('./Category');

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  })
  
  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  })

module.exports = { Product, Category } ;