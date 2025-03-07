const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    socket.on("message", (data) => {
        console.log("Message received:", data);
        io.emit("message", data); 
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});
server.listen(3000, () => {
    console.log("WebSocket server running on port 3000");
});