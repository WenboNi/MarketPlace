// import all models
const Product = require('./Product');
const User = require('./User');


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

// User has many Products
User.hasMany(Product, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

// Products belongsTo User
Product.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });


//export all models
module.exports = { Product, User } ;