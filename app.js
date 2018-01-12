
// call the packages we need
var express = require('express');        
var app = express();                 
var bodyParser = require('body-parser');
var routerManager=require('./router/router');

const NodeCache = require( "node-cache" );
global.authMenuCache = new NodeCache();
global.authToken="";

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// all of our routes will be prefixed with /api
app.use('/api', routerManager.route());

// =============================================================================
app.listen(port);
console.log('Textrestaurant bot service has started on port ' + port);