let http = require('http');

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World\n');
}).listen(3000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');
