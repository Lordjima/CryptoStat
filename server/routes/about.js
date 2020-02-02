const Rates = require("../models/Crypto").RatesData;

module.exports = {
    getAboutPage: (req, res) => {
        Rates.find().then( rates => {
            res.render('about.ejs', {
                title: "CryptoStat | rates",
                subTitle: "A prpopos",
                rateList: rates
            });
        });
    }
};