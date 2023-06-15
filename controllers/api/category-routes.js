const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories, including its associated products
router.get('/', async (req, res) => {
    try {
      const categoryInfo = await Category.findAll({
        include: [{ model:Product }],
      });
      res.status(200).json(categoryInfo);
    } catch (err) {
      // to handle errors
      res.status(500).json({ message: "Error Encountered, Please Input Valid Option"})
    }
  });

// find category by the name of the category, including its associated Products
  router.get('/:category_name', async (req, res) => {
    try {
      const categoryInfo = await Category.findOne(req.params.category_name, {
        include: [{ model:Product }],
      });
      if (!categoryInfo) {
        res.status(404).json({ message: "Category Name Cannot Be Found, Please Re-enter Valid Category"});
      }
  
      res.status(200).json(categoryInfo);
    
    } catch (err) {
      // to handle errors
      res.status(500).json({ message: "Error Encountered, Please Input Valid Option"});
    }
  });

module.exports = router;