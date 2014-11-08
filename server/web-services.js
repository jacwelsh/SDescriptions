exports.get = function(app) {
	app.get('/data', function(req, res){
	  res.send('Hello World');
	});

	return exports;
};

exports.post = function(app) {
	app.post('/data', function(req, res){
	  res.send('Hello World');
	});

	return exports;
};