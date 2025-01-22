import express from "express";

const server = express();

//ROUTING
server.get("/", (req, res) => {
  res.json("Desde GET");
});

server.post("/", (req, res) => {
  res.json("Desde POST");
});

server.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

server.put("/", (req, res) => {
    res.json("Desde PUT");
  });

server.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default server;
