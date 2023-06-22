const express = require('express');
const app = express()
const http = require("http").createServer(app);
const cors = require("cors");
app.use(cors({}));
const {Server} = require("socket.io");

const io = new Server(http,{
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT"]
    }
})

io.on("connection",Socket=> {
    console.log("client connected",Socket.id);

    Socket.on("join_room",(data)=> Socket.join(data));

    Socket.on('disconnect',()=>{
        console.log("user disconnected",Socket.id);
    })

    Socket.on("send_message",(data)=>{
        //console.log("",data.value)
        //console.log("",data.room)
        //Socket.join(data.room)
       Socket.to(data.room).emit("recieve_message",data.value);
        //Socket.emit("recieve_message",data);
       // Socket.broadcast.emit("recieve_message",data);
    })
})


http.listen(8080, () => console.log("listening on port 8080"));

// TODO: implement concurrency and parallelism 
// TODO: implement web socket using melody or golang.org/x/net





// // Server-side code
// io.on('connection', (socket) => {
//     socket.on('message', (data) => {
//       // Send the message to all connected clients
//       io.emit('message', data);
      
//       // Send the message to all connected clients except the sender
//       socket.broadcast.emit('message', data);
      
//       // Send the message only to the sender
//       socket.emit('message', data);
//     });
//   });