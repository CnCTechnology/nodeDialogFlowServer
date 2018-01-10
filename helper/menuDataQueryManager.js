var jsonQuery = require('json-query');
var menuDataRecord = require('./menuData');
//Get Data from Record of Menu
var menuData = menuDataRecord.getData();
// var result = jsonQuery('people[country=NZ]', { data: data }).value;

var isContainingOption = function (optionId, optionsToMatch) {
    var boolRes = false;
    for (k = 0; k < optionsToMatch.length; k++) {
        if (optionsToMatch[k].Id === optionId) {
            boolRes = true;
            break;
        }
    }
    return boolRes;
}

var getOptionForSelectedObject = function (option, menuItemsObject, cb_option) {
    var menuItemOptionResult = [];
    for (var i = 0, len = menuItemsObject.length; i < len; i++) {
        var optionItem = menuItemsObject[i].OptionItems;
        for (var j = 0; j < optionItem.length; j++) {
            if (isContainingOption(optionItem[j].Id, option)) {
                var optionResult = {
                    Id: menuItemsObject[i].Id,
                    Option: menuItemsObject[i].Option,
                    Min: menuItemsObject[i].Min,
                    Max: menuItemsObject[i].Max,
                }
                menuItemOptionResult.push(optionResult);
                break;
            }
        }
    }
    return cb_option(menuItemOptionResult);

}

var queryData = {
    getMenuItem: function (menuItem) {
        var queryBuilder = 'MenuItems[*MenuItem=' + menuItem + ']';
        var result = jsonQuery(queryBuilder, { data: menuData });
        return result.value;
    },
    getOptionDetails: function (option, menuItemObject, cb_optionDetails) {
        var queryBuilder = 'OptionItems[*OptionItem=' + option + ']';
        var result = jsonQuery(queryBuilder, { data: menuItemObject.Options });
        getOptionForSelectedObject(result.value, menuItemObject.Options, function (optionResult) {
            return cb_optionDetails({
                optionItem: result.value,
                option: optionResult
            });
        })

    }

};
module.exports = queryData;

