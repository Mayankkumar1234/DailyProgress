const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
 

app.use(express.static(path.resolve("./public")));

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

//   socket.emit("welcome", "Welcome to the server!");

  socket.on("message", (msg) => {
    console.log("message: " + msg);
    io.emit("message", msg); // Broadcast the message to all clients
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/",(req,res)=>{
  return res.sendFile("/public/index.html");
})

server.listen(3000, () => {
  console.log("listening on :3000");
});
