const router = require('express').Router();
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');

router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;