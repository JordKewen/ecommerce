const express = require('express');
const router = express.Router();
//const routes = require('../routes/')
const controller = require('../controllers/Admin_Controller')

router.post('/register',controller._register)
router.post('/login',controller._login)

module.exports = router;