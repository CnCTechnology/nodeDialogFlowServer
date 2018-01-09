var jsonQuery = require('json-query');
var menuDataRecord = require('./menuData');
//Get Data from Record of Menu
var data = menuDataRecord.getData();
// var result = jsonQuery('people[country=NZ]', { data: data }).value;


var query = {
    getMenuItem=function (menuItem) {
        var result = jsonQuery('MenuItems[**][*MenuItem=menuItem]',{data:data}).value;
    }

}
module.exports = query;

