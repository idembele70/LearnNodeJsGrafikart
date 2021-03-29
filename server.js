let http = require('http');
let server = http.createServer();
let fs = require('fs');
let url = require('url');

server.on('request', function (request, response) {
    response.writeHead(200);

    let parse = url.parse(request.url, true).query;
    if (parse.name == undefined) parse.name = "";
    response.end('Bonjour ' + parse.name);
})

server.listen(8080);