global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./exchange.js");


// exchange.marketBuy("btcusd")
// .then(response => console.log(response))
// .catch(error => console.error(error));

// exchange.marketSell("btcusd")
// .then(response => console.log(response))
// .catch(error => console.error(error));

var hasPosition = false;

var strategy = function(){
    console.log("             ");
    console.log("========================");
    console.log("Execute strategy");

    indicators.hourlyMovingAverage("BTC", "USD", 100, function(ma){
        
        exchange.bitcoinPrice()
        .then(res => {

            var price =res;

            console.log("MA-hourly - ", ma);
            console.log("Price: ", price);
            //console.log(res);

            if(price < ma && !hasPosition){

                console.log("BUY!!");
                exchange.marketBuy("btcusd")
                .then(res=>{
                    console.log("Bought successful");
                    hasPosition = true;

                    setTimeout(strategy,1000);
                })
                .catch(console.error);
            }

            else if(price > ma && hasPosition){
                console.log("SELL!!")
                exchange.marketSell("btcusd")
                .then(res=>{
                    console.log("Sold successful");
                    hasPosition = false;

                    setTimeout(strategy,1000);
                })
                .catch(console.error);
            }

            else{
                console.log("HOLD!!!!");
                setTimeout(strategy,1000);
            }

            
            
        })
        .catch(console.error);

        hasPosition=true;
        
    });

}

strategy();
