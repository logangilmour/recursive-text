var stat = require('node-static');


// Create a node-static server instance to serve the './public' folder
//
var file = new(stat.Server)('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {

        // Serve files!

        file.serve(request, response);
    });
}).listen(process.env.PORT);