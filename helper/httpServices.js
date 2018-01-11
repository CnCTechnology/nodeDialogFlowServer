var httpService = {
    httpGet: function (option, cb_resp) {
        http.get(option, function (res) {
            var body = "";
            res.on('data', function (data) {
                body += data;
            });
            res.on('end', function () {
                return cb_resp({ isSuccess: true, data: body });
            })
            res.on('error', function (e) {
                return cb_resp({ isSuccess: false, data: body });
            });
        });
    }
}
module.exports = httpService;