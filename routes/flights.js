var express = require('express');
var router = express.Router();

const flightsController = require('../controllers/flights')

// flights/
router.get('/', flightsController.index)

router.get('/new', flightsController.new)

module.exports = router;
