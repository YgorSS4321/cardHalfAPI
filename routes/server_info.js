var express = require('express');
var router = express.Router();
var serverInfo = require("../models/server_info_model");

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var srvInfo = serverInfo.getServerInfo((err, result) => {
    console.log("result:");
    console.log(result);

    //if(!err){}
    res.status(200).json(result);


  });
  
  //res.status(200).json(docs);   
  
});

module.exports = router;
