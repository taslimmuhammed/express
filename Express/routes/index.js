var express = require('express');
var router = express.Router();

/* GET home page. */

var values= ["Name1", "Name2","Name3", "Name3" ]
const person ={name:"Nikhil", comments:{comment:"this is a sample comment",date:"07/08/2001"}}
router.get('/', function(req, res, next) {
  res.render('index', {person});
});

module.exports = router;
