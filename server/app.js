const express = require("express");
const app = express();
const port = 3000;
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
