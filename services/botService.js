
var apiaiRequest = require('../helper/apiaiReq');

var botService = {
    apiAi: function (req, res) {
        var response = apiaiRequest.process(req, function (result) {
            var speechReturned = '';
            if(result.fulfillment.speech!="retry"){
                var speechReturned = JSON.parse(result.fulfillment.speech);
            }else{
                var speechReturned = result.fulfillment.speech;                
            }
            
            res.send(speechReturned);
        }, function (error) {
            console.log(error);
        });
    }
}
module.exports = botService;