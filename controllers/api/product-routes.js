const router = require('express').Router();
const { Product, User } = require('../../models');

// The `/api/products` endpoint

 // get all products, including its associated Category
 router.get('/', async (req, res) => {
  const productInfo = await Product.findAll().catch((err) => {
    res.json(err);
  });
  res.json(productInfo);
});

 // Get One product by ID, including its associate Category
router.get('/id/:id', async (req, res) => {
  try {
    const productInfo = await Product.findByPk(req.params.id);
    if (!productInfo) {
      res.status(404).json({message: 'Product ID Not Found! Please Enter Valid ID#'});
      return;
    }
    res.status(200).json(productInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get multiple products by query filter
router.get('/query', async (req, res) => {
  try {
    const product_name = req.query.product_name;
    const city = req.query.city;
    const category = req.query.category;

    const whereClause = {};

    if (category) {
      whereClause.category = category;
    }

    if (product_name) {
      whereClause.product_name = product_name;
    }

    if (city) {
      whereClause.city = city;
    }

    const productResults = await Product.findAll({
      include: [{
        model: User, attributes: ["username"]
      }],
      where: whereClause
      
    });


    res.status(200).json(productResults);
  } catch (err) {
    res.status(500).json(err);
  }
})

 // Get product(s) by Name, including its associate Category
router.get('/name/:product_name', async (req, res) => {
    try {
      const productInfo = await Product.findAll({
        where: {
          product_name: req.params.product_name
        }
      });
      if (!productInfo) {
        res.status(404).json({message: 'Product Name Not Found! Please Enter Valid Product'});
        return;
      }
      res.status(200).json(productInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 // Get product(s) by City, including its associate Category
router.get('/city/:city', async (req, res) => {
    try {
      const productInfo = await Product.findAll({
        where: {
          city: req.params.city
        }
      });
      if (!productInfo) {
        res.status(404).json({message: 'City Not Found! Please Enter Valid City with Product(s) for sale'});
        return;
      }
      res.status(200).json(productInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 // Get product(s) by Category, including its associate Category
router.get('/category/:category', async (req, res) => {
    try {
      const productInfo = await Product.findAll({
        where: {
          category: req.params.category
        }
      });
      if (!productInfo) {
        res.status(404).json({message: 'Price Not Found! Please Enter Valid Price of Product(s) for sale'});
        return;
      }
      res.status(200).json(productInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 // Get product(s) by condition, including its associate Category
router.get('/:condition', async (req, res) => {
    try {
      const productInfo = await Product.findAll(req.params.condition);
      if (!productInfo) {
        res.status(404).json({message: 'Condition Not Found! Please Enter Valid Product Condition Between 1 & 10'});
        return;
      }
      res.status(200).json(productInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Create new product
router.post('/sell', async (req, res) => {
  try { 
    const createdProduct = await Product.create({
    product_name: req.body.product_name,
    item_description: req.body.item_description,
    category: req.body.category,
    price: req.body.price,
    item_condition: req.body.item_condition,
    city: req.body.city,
    contact_info: req.body.contact_info,
    image: req.body.image}
  );
  res.status(200).json(createdProduct);
  } catch (err) {
  res.status(500).json({ message: "Unable to Create New Product" });
  }
  });

// Update product by ID
router.put('/:id', (req, res) => {
    Product.update(req.body, {
      where: { id: req.params.id },
      }
    ).then((updatedProductInfo) => {
        if(!updatedProductInfo) {
            res.status(404).json({ message: "ID# for Product To Be Updated Cannot Be Found!" });
            return;
          }
        res.status(200).json(updatedProductInfo);
      }
    ).catch((err) => {
        res.status(500).json({ message: err + "- Failed to Update Product by ID#" });
    })
  
  });

// Delete product by ID
router.delete('/:id', (req, res) => {
    Product.destroy(
      {where: {id: req.params.id}})
      .then((deletedProduct) => {
        if(!deletedProduct) {
          res.status(404).json({ message: "ID # for Product To Be Deleted Cannot Be Found!" });
          return;
        }
        res.status(200).json(deletedProduct);
  
      })
      .catch((err) => {
        res.status(400).json({ message: err + "- Failed to Delete Product by ID#" });
        });
    });

module.exports = router;