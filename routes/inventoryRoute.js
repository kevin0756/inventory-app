const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryAPI')

router.get('/fetch-all-products/', inventoryController.fetchInventoryProducts);
router.get('/fetch-product-by-id/:productId', inventoryController.fetchInventoryProductById);
router.post('/save-product/', inventoryController.saveProduct);
router.put('/update-product-by-id/:productId/', inventoryController.updateInventoryProductById);
router.delete('/delete-product-by-id/:productId/', inventoryController.deleteProductById);

module.exports = router;