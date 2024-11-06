const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postControllers.js');

router.post('/', postsController.store);
router.put('/:id', postsController.update )
router.delete('/:id', postsController.destroy)

module.exports = router