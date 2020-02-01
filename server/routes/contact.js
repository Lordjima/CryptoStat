module.exports = {
    getContactPage: (req, res) => {
        res.render('contact.ejs', {
            title: "CryptoStat | Contact",
            subTitle: "Contact",
            subTitleTeam: "L'équipe",
            subTitleContact: "Prendre contact"
        });
    }
};