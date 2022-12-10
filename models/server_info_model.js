var fs = require("fs");

function getServerInfo(callback) {
    fs.readFile("./data/server_info_teste.json", "utf-8", (err, result) => {
        
        if(result != undefined && err == undefined){
            var srvInfo = JSON.parse(result);
        }

        callback(err, srvInfo);

    });

}

exports.getServerInfo = getServerInfo;