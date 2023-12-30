
const http = require('http');
const os = require('os');


const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/plain'});

  let message = process.env.HELLO_MESSAGE || "Hello";
  let secret = process.env.SECRET_MESSAGE || "secret";

  console.log(`My little secrets pod: ${secret}`);
  res.end(message);
});

const PORT = process.env.PORT || 3000;
const HOST = os.hostname;

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown() {
  console.log("\nApp is shutting down\n");
  server.close();
};