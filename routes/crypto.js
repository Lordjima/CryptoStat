const https = require('https');

module.exports = {
    getCryptoPage: (req, res) => {
        let urlBitfinex = "https://api-pub.bitfinex.com/v2/candles/trade:";
        let urlTemp = "1m:tBTCUSD/hist?limit=100";

        let config = {method: "GET", headers: { accept: "application/json" } };

        https.get(urlBitfinex+urlTemp, config, function (res1) {
            let data = "";

            res1.on('data', function(content){
                data+= content;
            });

            res1.on("end", function () {
                const result = JSON.parse(data);
                res.render('crypto.ejs', {
                    title: "CryptoStat | Crypto",
                    subTitle: "Crypto",
                    data: result
                });
            });

        });


    }
};