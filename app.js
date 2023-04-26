const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to the Home Page');
  } else if (req.url === '/about') {
    res.end('Welcome to the about section of our Site');
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>Can't Seem to find the page you are looking for :(</p>
  <a href="/">Back to Home</a>
  `);
  }
});

server.listen(3000, () => {
  console.log('Server is Listening...');
});
