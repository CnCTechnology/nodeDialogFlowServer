
var apiaiRequest = require('../helper/apiaiReq');

var botService = {
    apiAi: function (req, res) {
        var response = apiaiRequest.process(req, function (result) {

            if (result.fulfillment.speech != "retry") {
                res.send(JSON.parse(result.fulfillment.speech));
            } else {
                apiaiRequest.process(req, function (result) {
                    if (result.fulfillment.speech != "retry") {
                        res.send(JSON.parse(result.fulfillment.speech));
                    } else {
                        res.status(552).send(result.fulfillment.speech);
                    }
                });
            }
        }, function (error) {
            console.log(error);
        });
    }
}
module.exports = botService;