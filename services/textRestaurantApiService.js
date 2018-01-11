var hostName = 'payments.textrestaurants.com';
var apiBasePath = '/api/v1/';

var httpHelper = require('../helper/httpServices');

var getBasicAuthOption = function (servicename, username, passw) {
    return {
        host: hostName,
        path: apiBasePath + servicename,
        headers: {
            'Authorization': 'Basic ' + new Buffer(username + ':' + passw).toString('base64')
        }
    };
}


var remoteApi = {
    getTextrestaurantToken: function (req, res) {
        var opt = getBasicAuthOption('token', 'sshekhar', 'ZNGyhE8F');
        httpHelper.httpGet(opt, function (result) {
            res.send(result);
        });
    }
}
module.exports = remoteApi;