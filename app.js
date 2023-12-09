const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"))

app.listen(3030, ()=>{
    console.log("¡Run Servi Run!");
})

app.get("/home", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/hopper.html"))
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/turing.html"))
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/lovelace.html"))
});


app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/hamilton.html"))
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/clarke.html"))
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/babbage.html"))
});



