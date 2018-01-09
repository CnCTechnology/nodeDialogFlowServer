var jsonQuery = require('json-query');
var menuDataRecord = require('./menuData');
//Get Data from Record of Menu
var menuData = menuDataRecord.getData();
// var result = jsonQuery('people[country=NZ]', { data: data }).value;


var queryData = {
    getMenuItem: function (menuItem) {
        var result = jsonQuery('MenuItems[**][*MenuItem=menuItem]',{data:data}).value;
        return result;
    }

};
module.exports = queryData;

