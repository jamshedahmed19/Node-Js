const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request Was Made");
});

server.listen(3000, () => {
  console.log("Listening for request on port 3000");
});