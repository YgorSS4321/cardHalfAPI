var express = require('express');
var router = express.Router();
var serverInfo = require("../models/server_info_model");

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var srvInfo = serverInfo.getServerInfo((err, result) => {

    if(err == undefined && result != null){
      res.status(200).json(result);
    }
    


  });
  
  
});

module.exports = router;
