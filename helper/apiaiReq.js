
var apiai = require('apiai');
var apiApp = apiai("00e250db9e5a4c87b9fd703fb3dbbf98");

var getSessionId = function () {
    var yourDate = new Date();
    var epochTicks = 621355968000000000;
    var ticksPerMillisecond = 10000;
    var yourTicks = epochTicks + (yourDate.getTime() * ticksPerMillisecond);
    return yourTicks;
}


var apiaiRequest = {
    process: function (req, cb_result, cb_error) {
        console.log(req.body.textMessage);
        var request = apiApp.textRequest(req.body.textMessage, {
            sessionId: getSessionId()
        });

        request.on('response', function (response) {
            console.log(response);
            return cb_result(response.result);
        });

        request.on('error', function (error) {
            return cb_error(error);
        });
        request.end();
    }
};
module.exports = apiaiRequest; 
