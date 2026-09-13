import http from "http";

const server = http.createServer((_req, res) => {
  res.end("OK");
});

server.listen(3001, () => {
  console.log("Servidor en 3001");
});

server.on("close", () => {
  console.log("¡¡SERVER CLOSED!!");
});

process.on("exit", (code) => {
  console.log("PROCESS EXIT", code);
});