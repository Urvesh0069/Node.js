import express, { json } from "express";
import dbConnect from "./db.js";
import validate from "./middleware.js";
import { find, create, findByIdAndDelete, findByIdAndUpdate, findById } from "./user.js";

const app = express();
app.use(json());

app.get("/", async (req, res) => {
  try {
    const { gender, name } = req.query;
    let query = {};
    if (gender) query.gender = gender;
    if (name) query.name = name;

    const users = await find(query);
    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/", validate, async (req, res) => {
  try {
    const user = await create(req.body);
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findByIdAndDelete(id);
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findByIdAndUpdate(id, req.body, { new: true });
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/info/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findById(id);
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

dbConnect().then(() => {
  app.listen(8069, () => {
    console.log("Server started on port 8069");
  });
});
