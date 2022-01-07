const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { selectMessage, addMessage} = require("./user.js");
const res = require("express/lib/response");


app.post("/add-message",async (req,res) =>{
    const message = req.body;
    await addMessage(message);
    res.json({ message : "message added successfully"});
});

app.get("/messages",async (req,res) =>{
    const list = await selectMessage();
    res.json(list);
});

app.listen(4000,() => console.log("Server started"));