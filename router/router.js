var express = require('express');

var webhookManager = require('../services/webHook');
var botServiceManager = require('../services/botService');
var queryService = require('../services/queryService');
var textrestaurantApiServices = require('../services/textRestaurantApiService');

var routerExport = {
    route: function () {
        var router = express.Router();

        router.get('/', function (req, res) {
            res.send('Textrestaurants bot service is up and running.');
        });

        router.post('/apiai', botServiceManager.apiAi);
        router.post('/webhook', webhookManager.hook);

        router.post('/TestJSONQuery', queryService.getMenuItem);
        router.post('/TestJSONQuery/options', queryService.getOptionDetails);

        router.get('/textrestaurant/token', textrestaurantApiServices.getTextrestaurantToken);
        router.get('/textrestaurant/menu', textrestaurantApiServices.getMenuItem);

        return router;
    }
}
module.exports = routerExport;