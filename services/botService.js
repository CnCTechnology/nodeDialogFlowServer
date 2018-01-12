
var apiaiRequest = require('../helper/apiaiReq');

var resolveArraySoloString = function (data) {
    if (Array.isArray(data)) {
        return data[0];
    }
    else {
        return data;
    }
};

var resolveItems = function (items) {
    var itemsCleaned = [];
    for (var i = 0; i < items.length; i++) {
        itemsCleaned.push({
            quantity: resolveArraySoloString(items[i].quantity),
            item: resolveArraySoloString(items[i].item),
            options_item: items[i].options_item
        });
    }
    return itemsCleaned;
};

var refineTheReturn = function (speechObject) {
    var cleanedObject = {
        items: resolveItems(speechObject.items),
        pickupOrDelivery: resolveArraySoloString(speechObject.pickupOrDelivery),
        address: resolveArraySoloString(speechObject.address),
        paymentMode: resolveArraySoloString(speechObject.paymentMode)
    }
};


var botService = {
    apiAi: function (req, res) {
        var response = apiaiRequest.process(req, function (result) {
            var speechReturned = JSON.parse(result.fulfillment.speech);
            res.send(refineTheReturn(speechReturned));
        }, function (error) {
            console.log(error);
        });
    }
}
module.exports = botService;