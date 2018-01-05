var getChatResult = function (speech) {
    return {
        speech: speech,
        displayText: speech,
        source: "apiai-test-webhook-node"
    }
}
var intentManager = require('./intentFactory');
var intentRequestManager = {

    process: function (req, res) {
        console.log(req.body.result);
        var actionName = req.body.result.action;
        console.log(actionName);
        var speech = "";
        switch (actionName) {
            case "t001":
                speech = intentManager.t001(req);
                break;
            case "t002":
                speech = intentManager.t002(req);
                break;
            case "t003":
                speech = intentManager.t003(req);
                break;
            default:
                speech = "couldn't find intention";
                break;
        }
        return getChatResult(speech);
    }
}
module.exports = intentRequestManager; 