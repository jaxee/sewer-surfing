//simple server listens on the provided port and responds with static files

// load http module
var http = require('http');
var fs = require('fs');
var mime = require('mime-types');
const ROOT = "./public_html";

// create http server
var server = http.createServer(handleRequest);
server.listen(4005);

console.log('Server listening on port 4005');

function handleRequest(req, res) {
	
	//process the request
	console.log("Request for: "+req.url);
	var filename = ROOT+req.url;
	
	var code=500;
	var data = "";
	if (fs.existsSync(filename)) {		
		var stats = fs.statSync(filename);
		if (stats.isDirectory()) {
			filename += "/index.html";
		}
		console.log("Getting file: "+filename);
		data = fs.readFileSync(filename);
		code = 200;
		
	} else {
		console.log("File not found");
		code = 404;
		data = fs.readFileSync(ROOT+"/404.html");
	}
	
	// content header
	res.writeHead(code, {'content-type': mime.lookup(filename)|| 'text/html'});
	// write message and signal communication is complete
	res.end(data);
};