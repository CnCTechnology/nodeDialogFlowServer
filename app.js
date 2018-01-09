
// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var intentRequest = require('./helper/intentReqFactory');
var apiaiRequest = require('./helper/apiaiReq');

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// =============================================================================
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/apiai', function (req, res) {
    var response = apiaiRequest.process(req, function (result) {
        console.log(result);
        res.json({ displayText: result.fulfillment.speech });
    }, function (error) {
        console.log(error);
    });
    res.json(response);
});

router.post('/webhook', function (req, res) {
    var response = intentRequest.process(req, res);
    res.json(response);
});

// all of our routes will be prefixed with /api
app.use('/api', router);


// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);