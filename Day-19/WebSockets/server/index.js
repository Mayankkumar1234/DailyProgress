import express from "express";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hey hello!");
});

io.on("connection", (socket) => {
  console.log("A user connected");
  console.log("Socket ID:", socket.id);
  socket.on("message", ({ room, message }) => { 

    console.log({room , message})
    socket.to(room).emit("receive-message", message);
    
  });

  socket.on("join-room", (room)=>{
    socket.join(room);
    console.log(`User joined ${room}`)
    
  })

  // User sends a message to the room

  socket.on("roomMessage", ({ room, message }) => { 

  // io.to(room).emit("roomMessage", message);
    console.log(`Message to room ${room}: ${message}`);
  }
  );
   
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
