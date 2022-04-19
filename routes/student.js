var express = require('express');
var router  = express.Router();

var student_controller = require('../controllers/studentController');

router.get('/list',student_controller.list);

module.exports = router;