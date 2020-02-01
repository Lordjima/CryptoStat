const express = require("express");
const bitfinex = require("../models/Crypto").BitfinexData;
const kraken = require("../models/Crypto").KrakenData;
const https = require('https');

const router = express.Router();

router.post('/bitfinex', (req, res) => {

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
            const prices = result.map( item => {
                return item;
            });
            console.log(prices);
            prices.forEach( price => {
                const crypto = new bitfinex({
                    Timestamp: price[0],
                    OpenPrice: price[1],
                    ClosePrice: price[2],
                    Highest: price[3],
                    Lowest: price[4],
                    Volume: price[5]
                });
                crypto.save()
                    .then( () => console.log("ok"))
                    .catch( error => {
                        if ( error.Title === "ValidationError"){
                            res.status(400).json(error.errors);
                        } else {
                            res.status(500);
                        }
                    });
            });
            res.status(201).json(result);
        });
    });

});

router.post('/kraken', (req, res) => {

    let urlKraken = "https://api.kraken.com/0/public/Trades?pair=xbtusd";

    let config = {method: "GET", headers: { accept: "application/json" } };

    https.get(urlKraken, config, function (res2) {
        let dataKraken = "";

        res2.on('data', function(content){
            dataKraken += content;
        });

        res2.on("end", function () {
            dataKraken = JSON.parse(dataKraken);
            const prices = dataKraken['result']['XXBTZUSD'].map( item => {
                return item;
            });
            prices.forEach( price => {
                const crypto = new kraken({
                    Price: price[0],
                    Volume: price[1],
                    Timestamp: price[2],
                    Method: price[3]
                });
                crypto.save()
                    .then( () => console.log("Karken saved"))
                    .catch( error => {
                        if ( error.Title === "ValidationError"){
                            res.status(400).json(error.errors);
                        } else {
                            res.status(500);
                        }
                    });
            });
            res.status(201).json(dataKraken);
        });
    });

});


module.exports = router;