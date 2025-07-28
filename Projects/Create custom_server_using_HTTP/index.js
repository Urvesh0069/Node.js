const http = require('http');
const port = 3030 || 3003;

const server = http.createServer((req, res) => {
  res.end(`Hello, Node.js Server start in localhost ${port}!`);
});

server.listen(port, () => {
  console.log('Server started');
});
