const express = require('express');
const router = express.Router();
//const routes = require('../routes/')
const controller = require('../controllers/Stripe_Controller')

router.post('/purchase',controller.stripePurchase)


module.exports = router;