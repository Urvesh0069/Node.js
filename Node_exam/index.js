import express, { json } from "express";
import dbConnect from "./db.js";
import { validate } from "./midleware.js";
import User from "./user.js";

const app = express();
app.use(json());

dbConnect();

app.get("/", async (req, res) => {
    const { gender, name } = req.query;
    const query = {};
    if (gender) query.gender = gender;
    if (name) query.name = name;

    const users = await User.find(query);
    res.send(users);

});

app.post("/", validate, async (req, res) => {

    const user = await User.create(req.body);
    res.send(user);

});

app.delete("/:id", async (req, res) => {

    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.send(user);

});

app.patch("/:id", async (req, res) => {

    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.send(user);

});

app.get("/info/:id", async (req, res) => {

    const { id } = req.params;
    const user = await User.findById(id);
    res.send(user);

});

app.listen(8001, () => {
    console.log("Server started on port 8069");
});
