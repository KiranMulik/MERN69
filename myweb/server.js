const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello World!");
  res.end();
});

server.listen(3005, () => {
  console.log("Server running on port 3005");
});
