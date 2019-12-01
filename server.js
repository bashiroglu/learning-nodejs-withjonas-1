const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('hi from overview');
  } else if (pathName === '/product') {
    res.end('hi from product');
  } else if (pathName === '/api') {
    res.end('hi from api');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello world'
    });
    res.end('<h1>hi from 404</h1>');
  }
});
server.listen(8000, '127.0.0.1', () => {
  console.log('server created');
});
