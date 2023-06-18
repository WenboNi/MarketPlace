const router = require('express').Router();
const { Product, User } = require('../models');

 // get all products, including its associated Category
 router.get('/', async (req, res) => {
      const productInfo = await Product.findAll({
        include: [{
          model: User, attributes: ["username"]
        }]
    }) .catch((err) => {
      res.status(500).json(err);
    }); 
    const products = productInfo.map((product) => product.get({ plain: true }));
    // res.render('homepage', {product, loggedIn: req.session.loggedIn });
    res.status(200).json(products)
});

 // Get One product by ID, including its associate Category
router.get('/product/:id', async (req, res) => {
    try {
      const productInfo = await Product.findByPk(req.params.id, {
        include: [{
          model: User, attributes: ["username"]
        }]
      });
      if (!productInfo) {
        res.status(404).json({message: 'Product With Associated ID Not Found! Please Enter Valid ID#'});
        return;
      }
      const product = productInfo.get({ plain: true });
      // res.render('homepage', {product, loggedIn: req.session.loggedIn });
      res.status(200).json(product)
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;