const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postControllers.js');

router.post('/', postsController.store);

module.exports = router