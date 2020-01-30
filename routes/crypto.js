module.exports = {
    getCryptoPage: (req, res) => {
        res.render('crypto.ejs', {
            title: "CryptoStat | Crypto",
            subTitle: "Crypto"
        });
    }
};