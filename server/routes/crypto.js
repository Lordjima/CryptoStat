const bitfinex = require("../models/Crypto").BitfinexData;
const kraken = require("../models/Crypto").KrakenData;

module.exports = {
    getCryptoPage: (req, res) => {
        bitfinex.find().then(bitfinexData => {
            kraken.find().then(krakenData => {
                res.render('crypto.ejs', {
                    title: "CryptoStat | Crypto",
                    subTitle: "Crypto",
                    dataBitfinex: bitfinexData,
                    dataKraken: krakenData
                });
            });
        });
    }
};