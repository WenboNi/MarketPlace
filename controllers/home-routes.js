const router = require('express').Router();
const { Product, Category } = require('../../models');

 // get all products, including its associated Category
 router.get('/', async (req, res) => {
      const productInfo = await Product.findAll({
        include: [{ model: Category }]
    }) .catch((err) => {
      res.status(500).json(err);
    });
    const products = productInfo.map((product) => product.get({ plain: true }));
    res.render('homepage', { products, loggedIn: req.session.loggedIn }); 
});

 // Get One product by ID, including its associate Category
router.get('/product/:id', async (req, res) => {
    try {
      const productInfo = await Product.findByPk(req.params.id, {
        include: [{ model: Category }],
      });
      if (!productInfo) {
        res.status(404).json({message: 'Product With Associated ID Not Found! Please Enter Valid ID#'});
        return;
      }
      const product = productInfo.get({ plain: true });
      res.render('homepage', {product, loggedIn: req.session.loggedIn });
    } catch (err) {
      res.status(500).json(err);
    }
  });