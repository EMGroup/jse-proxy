var connect = require('connect');
var request = require('request');
var url = require('url');

var app = connect();

function log() {
	return;
	console.log.apply(console, arguments);
}

function error() {
	return;
	console.error.apply(console, arguments);
}

app.use(function (req, downstreamRes) {
	var query = url.parse(req.url, true).query;
	var upstreamUrl = query.url;
	var successCallback = query.successCallback;
	var errorCallback = query.errorCallback;

	if (!upstreamUrl) {
		return;
	}

	log('requesting ' + upstreamUrl);
	request.get(upstreamUrl, function (error, upstreamRes, script) {
		if (error) {
			error("Error:", upstreamUrl, error) 
			return;
		}
		log('done ' + upstreamUrl);

		if (upstreamRes.status >= 400) {
			downstreamRes.write(errorCallback + '("');
			downstreamRes.write(JSON.stringify(script));
			downstreamRes.write(');');
			downstreamRes.end()
			return;
		}

		downstreamRes.write(successCallback + '(');
		downstreamRes.write(JSON.stringify(script));
		downstreamRes.write(');');
		downstreamRes.end()
	});
});

app.listen(process.env.PORT || 8000);
