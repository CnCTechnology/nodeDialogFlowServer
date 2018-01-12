
var resolveArraySoloString = function (data) {
    if(data){
        if (Array.isArray(data)) {
            return String(data[0]);
        }
        else {
            return String(data);
        }
    }
    else{
        return data;
    }
    
};

var resolveItems = function (items) {
    if(items){
        var itemsCleaned = [];
        for (var i = 0; i < items.length; i++) {
            itemsCleaned.push({
                quantity: resolveArraySoloString(items[i].quantity),
                item: resolveArraySoloString(items[i].item),
                options_item: items[i].options_item
            });
        }
        return itemsCleaned;
    }
    else{
        return items;
    }
    
};

var refineTheReturn = function (speechObject) {
    var cleanedObject = {
        items: resolveItems(speechObject.items),
        pickupOrDelivery: resolveArraySoloString(speechObject.pickupOrDelivery),
        address: resolveArraySoloString(speechObject.address),
        paymentMode: resolveArraySoloString(speechObject.paymentMode)
    }
    return cleanedObject;
};

var cleanSpeechObject = {
    clean: function (speech) {
        return refineTheReturn(speech);
    }
};

module.exports = cleanSpeechObject;