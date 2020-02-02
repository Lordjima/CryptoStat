const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', {
    user: "root",
    pass: "root",
    dbName: "crypto",
    useNewUrlParser: true
}).catch(e => {
    console.log(e);
});

module.exports = mongoose.connection;