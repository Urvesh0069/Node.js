import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "./.env" });

// EJS setup
app.set("view engine", "ejs");
app.set("views", "./Pages");

// Port
const port = process.env.PORT || 3532;

// In-memory task list
let Taskdata = [];

// Home route - show all tasks
app.get("/", (req, res) => {
  res.render("index", { taskdata: Taskdata });
});

// Add task form
app.get("/addtask", (req, res) => {
  return res.render("addTask");
});

// Insert task
app.post("/insertTask", (req, res) => {
  let obj = {
    id: String(req.body.taskid),
    name: req.body.name,
    desc: req.body.desc,
    date: req.body.date,
    time: req.body.time,
    efficient: req.body.efficient,
  };
  Taskdata.push(obj);
  console.log("Task Added:", obj);
  return res.redirect("/");
});

// Edit task form (fetch data)
app.get("/edittaskData", (req, res) => {
  let taskEditId = String(req.query.id);
  let newEditData = Taskdata.filter((val) => String(val.id) === taskEditId);
  return res.render("edittask", { editData: newEditData[0] });
});

// Update task
app.post("/edittask", (req, res) => {
  let editid = String(req.body.editid);
  Taskdata = Taskdata.map((task) => {
    if (String(task.id) === editid) {
      task.name = req.body.name;
      task.desc = req.body.desc;
      task.date = req.body.date;
      task.time = req.body.time;
      task.efficient = req.body.efficient;
    }
    return task;
  });
  console.log("Updated Task:", editid);
  return res.redirect("/");
});

// Delete task
app.get("/deleteData", (req, res) => {
  let id = String(req.query.id);
  Taskdata = Taskdata.filter((val) => String(val.id) !== id);
  console.log("Deleted Task:", id);
  return res.redirect("/");
});

// Server start
app.listen(port, (err) => {
  !err
    ? console.log(`✅ Server running on http://localhost:${port}`)
    : console.error(err);
});
