var express = require('express');
var router = express.Router();

const userController = require('../controller/userController');

router.get('/', userController.get);
router.post('/', userController.post);
router.delete('/', userController.delete);

module.exports = router;