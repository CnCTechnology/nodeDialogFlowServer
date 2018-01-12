
var intentRequest = require('../helper/intentReqFactory');
var webHookManager = {
    hook: function (req, res) {
        var response = intentRequest.process(req, res);
        console.log('--------------- response debug in webhook -----------------');
        console.log(response);
        console.log('--------------- response end in webhook -----------------');
        res.json(response);
    }
}
module.exports = webHookManager;