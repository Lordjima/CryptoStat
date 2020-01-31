const https = require('https');

module.exports = {
    getCryptoPage: (req, res) => {
        let urlBitfinex = "https://api-pub.bitfinex.com/v2/candles/trade:";
        let urlKraken = "https://api.kraken.com/0/public/Trades?pair=xbtusd";
        let urlTemp = "1m:tBTCUSD/hist?limit=100";

        let config = {method: "GET", headers: { accept: "application/json" } };

        https.get(urlBitfinex + urlTemp, config, function (res1) {
            let dataBitfinex = "";

            res1.on('data', function(content){
                dataBitfinex += content;
            });

            res1.on("end", function () {
                https.get(urlKraken, config, function (res2) {
                    let dataKraken = "";

                    res2.on('data', function(content){
                        dataKraken += content;
                    });

                    res2.on("end", function () {
                        dataBitfinex = JSON.parse(dataBitfinex);
                        dataKraken = JSON.parse(dataKraken);
                        console.log(dataKraken);
                        res.render('crypto.ejs', {
                            title: "CryptoStat | Crypto",
                            subTitle: "Crypto",
                            dataBitfinex: dataBitfinex,
                            dataKraken: dataKraken['result']['XXBTZUSD']
                        });
                    });
                });
            });

        });


    }
};