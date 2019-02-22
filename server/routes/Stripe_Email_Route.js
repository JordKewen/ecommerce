const express = require('express');
const router = express.Router();
const controller = require('../controllers/Stripe_Email_Controller')

router.post('/email',controller.sendEmail)

module.exports = router;