var express = require('express');

module.exports = function () {
    var router = express.Router();

    //var chatHook = require('../helper/chatHook.js');    

    router.get('/', function(req, res) {
        res.json({ message: 'hooray! welcome to our api!' });   
    });

   // router.post('/text/input', chatHook.chatProcess);




    return router;
}