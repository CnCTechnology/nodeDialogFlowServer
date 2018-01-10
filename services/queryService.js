var queryHelper = require('../helper/menuDataQueryManager');
var menuQueryService = {
    getMenuItem: function (req, res) {
        var response = queryHelper.getMenuItem(req.body.itemName);
        res.send(response);
    },
    getOptionDetails: function (req, res) {
        queryHelper.getOptionDetails(req.body.option, req.body.menuItem, function (response) {
            res.send(response);
        });
    }
}
module.exports = menuQueryService;
