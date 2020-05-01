const express = require('express')
const router = express.Router();
const coffecontroller = require('../controllers/Coffe')

router.get('/show',coffecontroller.getData)
router.post('/create',coffecontroller.createData)

module.exports = router