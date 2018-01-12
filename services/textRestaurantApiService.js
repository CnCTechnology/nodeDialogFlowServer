var txtRestApiHelper = require('../helper/textRestaurantApiHelper');


var remoteApi = {
    getTextrestaurantToken: function (req, res) {
        txtRestApiHelper.getAuthToken(function (ret_tok) {
            res.send(ret_tok);
        })
    },
    getMenuItem: function (req, res) {
        txtRestApiHelper.getAuthToken(function (ret_tok) {
            if(ret_tok.isSuccess){
                var returnDataJSON = ret_tok.data
                txtRestApiHelper.getMenuData(returnDataJSON.token, function (responseData) {
                    res.send(responseData);
                });
            } 
            else{
                res.send(ret_tok);
            }           
        });

    }
}
module.exports = remoteApi;