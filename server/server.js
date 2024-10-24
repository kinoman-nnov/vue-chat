const http = require("http");

const server = http.createServer(function(req, res) {

  console.log('url', req.url);
  console.log('type', req.method);
  console.log('User-Agent', req.headers["user-agent"]);
  console.log('HEADERS', req.headers);

  res.write("hello from server.js")

  res.end("From my server.js")
});

server.listen(9898, () => console.log("Server run http://localhost:9898"));