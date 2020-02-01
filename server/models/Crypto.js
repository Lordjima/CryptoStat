const db = require("../db");
const mongoose = require("mongoose");

const BitfinexSchema = mongoose.Schema({
    Timestamp: Number,
    OpenPrice: Number,
    ClosePrice: Number,
    Highest: Number,
    Lowest: Number,
    Volume: Number
});

const BitfinexData = db.model("BitfinexData", BitfinexSchema);

const KrakenSchema = mongoose.Schema({
    Price: String,
    Volume: String,
    Timestamp: String,
    Method: String
});

const KrakenData = db.model("KrakenData", KrakenSchema);

module.exports = {BitfinexData,  KrakenData};