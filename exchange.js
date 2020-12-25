const GeminiAPI = require("gemini-api").default;
//require("./constVar.js");
const secret = "2TsnTMoQap9Cp8fNrGPq7vmScnN";
const key = "account-k5sERZBdhv1IWoKKbz9l";
const restClient = new GeminiAPI({key, secret, sandbox:true});

module.exports = {

    marketBuy:function(symbol){

        return restClient.newOrder({amount:1,
                            price:24000,
                            side:"buy",
                            symbol:symbol,
                            options:["immediate-or-cancel"]})


    },

    marketSell:function(symbol){

        return restClient.newOrder({amount:1,
                            price:20000,
                            side:"sell",
                            symbol:symbol,
                            options:["immediate-or-cancel"]})


    },

    bitcoinPrice:function(){
        return restClient.getTicker("btcusd");
    }

}




// Create API with primary
// Set permissions to Fund Manager, Trading, Require Heartbeat (all checkboxes)

// restClient.newOrder({amount:3,price:24000,side:"buy",symbol:"btcusd"})
// .then(response => console.log(response.order_id, response.timestampms))
// .catch(console.error);

// restClient.getAllSymbols().then(response => console.log(response));
// restClient.newOrder("btcusd")
// .then(response => console.log(response))
// .catch(error => console.log(error));

// CryptoCompareAPI.price('BTC', ['USD', 'EUR'])
// .then(prices => {
//   console.log(prices)
//   // -> { USD: 1100.24, EUR: 1039.63 }
// })
// .catch(console.error);

// CryptoCompareAPI.priceHistorical('BTC', ['USD', 'EUR'], new Date('2017-01-01'))
// .then(prices => {
//   console.log(prices)
//   // -> { BTC: { USD: 997, EUR: 948.17 } }
// })
// .catch(console.error)


// indicators.minuteMovingAverage("BTC", "USD", 30, function(result){
//     console.log("MA-minute: ", result)
// });

// indicators.hourlyMovingAverage("ETC", "USD", 50, function(result){
//     console.log("MA-hourly: ", result)
// });

// indicators.dailyMovingAverage("ETH", "USD", 50, function(result){
//     console.log("MA-daily: ", result)
// });