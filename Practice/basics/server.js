const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/html')
  //   res.write('<h1>HWG</h1>');
  //   res.write('<p>hello!</p>');
  //   res.end();

  //lodash
  // const num = _.random(0 - 20);
  // console.log(num);

  // const greet = _.once(() => {
  //   console.log('hello');
  // });
  // greet();

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening on port 3000');
});
