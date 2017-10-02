var express = require('express');
var router = express.Router();

const userController = require('../controller/userController');

router.get('/:id', userController.get);
router.post('/', userController.post);
router.delete('/:id/:page', userController.delete);

module.exports = router;