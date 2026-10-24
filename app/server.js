const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200);
    return res.end("ok");
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Hello from AKS GitOps platform",
      version: process.env.APP_VERSION || "dev",
    })
  );
});

server.listen(port, () => console.log(`Listening on ${port}`));