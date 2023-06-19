const router = require('express').Router();
const multer = require('multer');
const path = require('path')
// Set up multer for uploading images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets/image")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

router.post('/api/products/image', upload.single('sellImage'), (req, res) => {
    // Handle the uploaded image file here
    const uploadedFile = req.file;
    // Handle the remaining form data
    
    res.sendStatus(200);
  });

  module.exports = router;