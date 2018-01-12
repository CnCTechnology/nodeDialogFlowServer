
var speechDataFormatCleaner = require('./speechObjectCleaner');

var intentsResolver = {
    t001: function (req) {
        var params = req.body.result.parameters;

        var item1Object = {
            quantity: params['number-integer'],
            item: params['item'],
            options_item: params['option']
        }

        var item2Object = {
            quantity: params['number-integer1'],
            item: params['item1'],
            options_item: params['option1']
        }

        var returnObject = {
            items: [item1Object, item2Object],
            pickupOrDelivery: params['Delivery-Pickup-Entity'],
            address: params['address'],
            paymentMode: params['paymentMode-Entity']
        }
        var formattedObject = speechDataFormatCleaner.clean(JSON.stringify(returnObject));
        return formattedObject;
    },
    t002: function (req) {
        var params = req.body.result.parameters;
        var item1Object = {
            quantity: params['number-integer'],
            item: params['item'],
            options_item: params['option']
        }
        var returnObject = {
            items: [item1Object],
            pickupOrDelivery: params['Delivery-Pickup-Entity'],
            address: params['address'],
            paymentMode: params['paymentMode-Entity']
        }
        var formattedObject = speechDataFormatCleaner.clean(JSON.stringify(returnObject));
        return formattedObject;
    },
    t003: function (req) {

    },
    t004: function (req) {

    },
    t005: function (req) {

    }
}

module.exports = intentsResolver;