module.exports = {
    getAboutPage: (req, res) => {
        res.render('about.ejs', {
            title: "CryptoStat | A propos",
            subTitle: "A prpopos"
        });
    }
};