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
    res.render('homepage', {
      loggedIn: req.session.loggedIn 
    });
});

router.get('/sell', async (req,res) =>{
  res.render('sell', {
    loggedIn: req.session.loggedIn 
  });
})

router.get('/product', async (req,res) =>{
  res.render('buy', {
    loggedIn: req.session.loggedIn 
  });
})

router.get('/login', async (req,res) =>{
  res.render('login', {
  });
})

router.get('/success', async (req,res) =>{
  res.render('success', {
    loggedIn: req.session.loggedIn
  });
})

router.get('/fail', async (req,res) =>{
  res.render('fail', {
    loggedIn: req.session.loggedIn
  });
})



module.exports = router;