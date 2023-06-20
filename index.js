const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const cors = require("cors");
const server = http.createServer(app);

const io = require("socket.io")(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.static(__dirname + "/client/dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
