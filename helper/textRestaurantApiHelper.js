
var jwtDecoder = require('jwt-decode');
var httpHelper = require('../helper/httpHelper');

var hostName = 'payments.textrestaurants.com';
var apiBasePath = '/api/v1/';


var isTokenExpired = function (token) {  
    if(!token)  {
        return false;
    }

    var decoded = jwtDecoder(token);
    var isExpired = decoded.exp - Math.floor(Date.now() / 1000) < 0
    return isExpired;
};

var cacheTheMenu = function (token, object) {
    global.authMenuCache.set(token, object, 86400);
};

var getBasicAuthOption = function (servicename, username, passw) {
    return {
        host: hostName,
        path: apiBasePath + servicename,
        headers: {
            'Authorization': 'Basic ' + new Buffer(username + ':' + passw).toString('base64')
        }
    };
};


var getToken = function (cb_result) {
    if (global.authToken !== "" && !isTokenExpired(global.authToken)) {
        return cb_result({ isSuccess: true, data: { token: global.authToken } });
    }
    else {
        var opt = getBasicAuthOption('token', 'sshekhar', 'ZNGyhE8F');
        httpHelper.httpGet(opt, function (result) {
            global.authToken=result.data.token;
            return cb_result(result);
        });
    }
}


var externalTxtRestaurantApi = {
    getAuthToken: function (cb_rep) {
        getToken(function (ret_token) {
            return cb_rep(ret_token);
        });
    },
    getMenuData: function (token, cb_menuData) {
        global.authMenuCache.get(token, function (err, value) {
            if (!err) {
                if (value == undefined) {
                    var opt = getBasicAuthOption('menu', token, '');
                    httpHelper.httpGet(opt, function (result) {
                        cacheTheMenu(token, result);
                        return cb_menuData(result);
                    });
                } else {
                    return cb_menuData(value);
                }
            }
        });

    }
}
module.exports = externalTxtRestaurantApi;