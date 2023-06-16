// import all models
const Product = require('./Product');
const User = require('./User');


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