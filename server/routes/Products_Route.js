const express = require('express');
const router = express.Router();
const routes = require('../routes/Products_Route')
const controller = require('../controllers/Products_Controller')

router.post('/add',controller.addProduct)
router.get('/display',controller.displayProducts)
router.post('/delete',controller.deleteProduct)
router.get('/:productinfo',controller.productInfo)
router.get("/type/:type", controller.getProductsByType);

module.exports = router;