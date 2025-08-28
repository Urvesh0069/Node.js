import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.send("Library API running..");
});

app.listen(3069, () => console.log("Server running on port 3069 (http://localhost:3069/)"));
