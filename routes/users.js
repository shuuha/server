var express = require('express');
var router = express.Router();

const mongoDb = require('../models/mongodb');
// const { insert, update, remove, fetchAll } = require('../models/helpers');
const fetchAll = require('../models/helpers/fetchAll');

router.get('/', (req, res)=> {
    mongoDb(fetchAll()(req, res))
});

// router.post();

// router.delete();

module.exports = router;