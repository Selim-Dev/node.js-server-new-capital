const http = require("node:http");
const fs = require("fs");
const html = require("./helpers/layout");
const module2 = require("./helpers/module2.js");
const hostname = "127.0.0.1";
const port = 5500;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html"); //mime type
      const repsponse = html.getLayout();
      res.end(repsponse);
      break;
    case "/style.css":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css"); //mime type
      res.end("body {background-color:yellow}");
      break;
    case "/test.jpg":
      res.statusCode = 200;
      const image = fs.readFile("./nature.jpg"); /// 5s
      console.log("image", image);
      res.setHeader("Content-Type", "image/jpg"); //mime type
      res.end(image);
      break;
    case "/profile":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json"); //mime type
      res.end(JSON.stringify({ name: "ali", age: 26 }));
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html"); //mime type
      res.end("<h1>Page Not Found!</h1>\n");
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
