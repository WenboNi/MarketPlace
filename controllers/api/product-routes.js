const router = require('express').Router();
const { Product, Category } = require('../../models');

// The `/api/products` endpoint

 // get all products, including its associated Category
router.get('/all', async (req, res) => {
    // find all products
    try {
      const productInfo = await Product.findAll({
        include: [{ model: Category }],
      });
      res.status(200).json(productInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 // Get One product by ID, including its associate Category
router.get('/:id', async (req, res) => {
    try {
      const productInfo = await Product.findByPk(req.params.id, {
        include: [{ model: Category }],
      });
      if (!productInfo) {
        res.status(404).json({message: 'Product ID Not Found! Please Enter Valid ID#'});
        return;
      }
      res.status(200).json(productInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 // Get product(s) by Name, including its associate Category
router.get('/:product_name', async (req, res) => {
    try {
      const productInfo = await Product.findAll(req.params.product_name, {
        include: [{ model: Category }],
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
router.get('/:city', async (req, res) => {
    try {
      const productInfo = await Product.findAll(req.params.city, {
        include: [{ model: Category }],
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

 // Get product(s) by price, including its associate Category
router.get('/:price', async (req, res) => {
    try {
      const productInfo = await Product.findAll(req.params.price, {
        include: [{ model: Category }],
      });
      if (!productInfo) {
        res.status(404).json({message: 'Price Not Found! Please Enter Valid Price with Product(s) for sale'});
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
      const productInfo = await Product.findAll(req.params.condition, {
        include: [{ model: Category }],
      });
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
    product_name: req.body.product_name_name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    condition: req.body.condition,
    location: req.body.location,
    contact_info: req.body.contact_info,
    image: req.body.image
  });
  res.status(200).json(createdProduct);
  } catch (err) {
        res.status(500).json({ message: err + "Unable to Create New Product" });
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