const CCAPIKey = "985ae0d6bd903d7db110b156807a949b853b34d322137f6d157621dace5752ee";
const CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(CCAPIKey);



module.exports = {

    minuteMovingAverage:function minuteMovingAverage(crypotAsset, fiatCurrency, minutes, callback){
        if (minutes>180){
            console.log("Only up to 180 minutes allowed")
            return
        }
        
        //Step 1 - get data from CC
        CryptoCompareAPI.histoHour(crypotAsset, fiatCurrency)
        .then(data => {
            //Step 2 calculate MA from 100 past hours
            data = data.reverse()
            var sum = 0;
            for(var i = 0; i<minutes; i++){
                sum+=data[i].close;
            }
    
            var movingAverage = Math.floor(sum/minutes);
            callback(movingAverage);
        })
        .catch(console.error);
    },

    hourlyMovingAverage:function hourlyMovingAverage(crypotAsset, fiatCurrency, hours, callback){
        if (hours>169){
            console.log("Only up to 169 hours allowed")
            return
        }
        
        //Step 1 - get data from CC
        CryptoCompareAPI.histoHour(crypotAsset, fiatCurrency)
        .then(data => {
            //Step 2 calculate MA from 100 past hours
            data = data.reverse()
            var sum = 0;
            for(var i = 0; i<hours; i++){
                sum+=data[i].close;
            }
    
            var movingAverage = Math.floor(sum/hours);
            callback(movingAverage);
        })
        .catch(console.error);
    },

    dailyMovingAverage:function dailyMovingAverage(crypotAsset, fiatCurrency, days, callback){
        if (days>90){
            console.log("Only up to 90 days allowed")
            return
        }
        
        //Step 1 - get data from CC
        CryptoCompareAPI.histoHour(crypotAsset, fiatCurrency)
        .then(data => {
            //Step 2 calculate MA from 100 past hours
            data = data.reverse()
            var sum = 0;
            for(var i = 0; i<days; i++){
                sum+=data[i].close;
            }
    
            var movingAverage = Math.floor(sum/days);
            callback(movingAverage);
        })
        .catch(console.error);
    }
}


