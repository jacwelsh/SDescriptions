exports.setup = function(app, express, __dirname, bodyParser) {
	app.set("ipaddr", "127.0.0.1");
	app.set("port", process.env.PORT || 5000);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded())
	app.set('views', __dirname + '/views');
	app.use(express.static("public", __dirname + "/public"));	
	app.engine('html', require('ejs').renderFile);
	
	return exports;
};

exports.routing = function(app) {
	app.route("/").get(
		function(request, response) {
	  		response.render("index.html");
	  	}
	);

	return exports;
};

exports.build = function(app, http) {
	http.listen(app.get("port"), app.get("ipaddr"),
		function() {
  			console.log("Application has started.");
  		}
	);

	return exports;
};

exports.open = function(open, domain, browser) {
	open(domain, browser)

	return exports;
};