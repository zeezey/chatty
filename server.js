var http = require('http');
var server = http.createServer();
server.listen(8887);

var messages = [];

var onRequest = function(req, res) {
    if (req.method == 'POST') {
       var postData = '';
       req.on('data', function(chunk) {
           postData += chunk.toString();
        });
        req.on('end', function() {
            console.log("Got POST data:");
            console.log(JSON.parse(postData));
       });
    }
}
http.createServer(onRequest).listen(12200);
