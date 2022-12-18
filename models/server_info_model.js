var fs = require("fs");

function getServerInfo(callback) {
    fs.readFile("./data/server_info_teste.json", "utf-8", (err, result) => {
        
        if(result != undefined && err == undefined){
            var srvInfo = JSON.parse(result);
            srvInfo = {
                "nome_do_servidor": srvInfo["nome_do_servidor"]
            };

        }

        callback(err, srvInfo);

    });

}

exports.getServerInfo = getServerInfo;