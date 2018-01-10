
var intentRequest = require('../helper/intentReqFactory');
var webHookManager = {
    hook: function (req, res) {
        var response = intentRequest.process(req, res);
        res.json(response);
    } 
}
module.exports = webHookManager;