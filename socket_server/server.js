const express = require('express');
const app = express()
const http = require("http").createServer(app);
const cors = require("cors");
app.use(cors({}));
const { Server } = require("socket.io");
const { MongoClient} = require("mongodb");
const uri = "mongodb+srv://debankanmitra:qulanVSXK8V76HzR@cluster0.ducoyoi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const io = new Server(http, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT"]
    }
})

io.on("connection", Socket => {
    console.log("client connected", Socket.id);
    Socket.on("join_room", (data) => Socket.join(data));
    Socket.on('disconnect', () => console.log("user disconnected", Socket.id))
    Socket.on("send_message", (data) => {
        console.log("THE DATA IS :", data)
        Socket.nsp.to(data.chat_id).emit("recieve_message", data);
        let id = data.chat_id
        const doc = {
            value: data.value,
            sender: data.sender,
          }
          InsertDoc(id,doc)
    })
})

// API endpoints
app.get('/api/messages/:id', (req, res) => {
    // Handle GET request for /api/users
    const id = req.params.id;
    ReadDocs(id,res)
});

http.listen(8080, () =>{ 
    console.log("listening on port 8080")
});

// TODO: implement concurrency and parallelism 
// TODO: implement web socket using melody or golang.org/x/net


const InsertDoc = async(id,doc) => {
    console.log("inserting in database", id,doc)
  try {
    await client.connect();
    const database = client.db("chats");
    const haiku = database.collection(id);
 
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
//run().catch(console.dir);


const ReadDocs = async(id,res) => {
    try {
        await client.connect();
        
        const database = client.db("chats");
        const collection = database.collection(id);
    
        const documents = await collection.find({}).toArray();
        res.json(documents);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } finally {
        await client.close();
      }
}
