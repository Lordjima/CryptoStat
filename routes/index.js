module.exports = {
    getIndexPage: (req, res) => {
        res.render('index.ejs', {
            title: "CryptoStat | Accueil",
            subTitle: "Accueil",
            subTitleAbout: "A propos",
            subTitleContact: "Contact"
        });
    }
};