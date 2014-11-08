//Dependencies
var express = require("express"),
	app = express(),
	bodyParser = require('body-parser'),
	http = require("http").createServer(app),
	_ = require("underscore"),
	open = require("open");

//Startup
require('./server/app-setup.js')
	.setup(app, express, __dirname, bodyParser)
	.routing(app)
	.build(app, http)
	.open(open, "127.0.0.1:5000", "Chrome");

//Web Services
require('./server/web-services.js')
	.get(app)
	.post(app);