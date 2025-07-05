const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct, // ✅ include this
} = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct); // ✅ add this route

module.exports = router;
