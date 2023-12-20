const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let userOnline = [];

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  console.log("username", socket.handshake.auth.username);

  userOnline.push({
    socketId: socket.id,
    username: socket.handshake.auth.username,
  });

  io.emit("onlineUser", userOnline);

  socket.emit("welcome", "hello ges" + socket.id);
  socket.on("kirimText", (hasiltext) => {
    // console.log(hasiltext);
    socket.broadcast.emit("update", hasiltext);
    io.emit("msg update", {
      from: socket.handshake.auth.username,
      hasiltext,
    });
  });

  socket.on("disconnect", () => {
    userOnline = userOnline.filter((el) => {
      return el.socketId !== socket.id;
    });
  });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
