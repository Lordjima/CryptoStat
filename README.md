# CryptoStat
![nodejs version](https://img.shields.io/badge/node.js-v10.16.0-green.svg)
![body parser version](https://img.shields.io/badge/bodyparser-v1.19.0-yellow.svg)
![ejs version](https://img.shields.io/badge/ejs-v3.0.1-yellow.svg)
![express version](https://img.shields.io/badge/express-v4.17.1-yellow.svg)
![mongoose version](https://img.shields.io/badge/mongoose-v5.8.10-orange.svg)
![nodemon version](https://img.shields.io/badge/nodemon-v2.0.2-orange.svg)

Site de statistiques de crypto-monnaies

# Getting Started

### Download repo from github

```shell script
git clone https://github.com/Lordjima/CryptoStat.git
```

### Start server listening on port 3000

```shell script
cd server
npm install
node app.js
```

### Start database via docker-compose

```shell script
docker-compose up -d
```

You can start with an empty database or restore sample data via this command

```shell script
docker-compose exec mongo mongorestore --username root --password root
```

# API ENDPOINTS

each endpoint save data in mongo

201 response is returned when data is saved

400 or 500 when a problem occurred 


### POST /cryptoStat/bitfinex

Save data from:

```text
https://api-pub.bitfinex.com/v2/candles/trade:1m:tBTCUSD/hist?limit=100
```

into following database BitfinexSchema:

```json
{
    "Timestamp": "Number",
    "OpenPrice": "Number",
    "ClosePrice": "Number",
    "Highest": "Number",
    "Lowest": "Number",
    "Volume": "Number"
}
```

This data is displayed on Crypto page

### POST /cryptoStat/bitfinex/rates

Save data from:

```text
https://api-pub.bitfinex.com/v2/tickers?symbols=ALL
```

into following database RatesSchema:

```json
{
    "Symbole": "String",
    "Price": "Number"
}
```

This data is displayed on Crypto page

### POST /cryptoStat/kraken

Save data from:

```text
https://api.kraken.com/0/public/Trades?pair=xbtusd
```

into following database KrakenSchema:

```json
{
    "Price": "String",
    "Volume": "String",
    "Timestamp": "String",
    "Method": "String"
}
```

This data is displayed on Bitfinex Rates page