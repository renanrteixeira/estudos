const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

//middleware
app.use((req, res, next) => {
  console.log(req.body);
  console.log(req.headers["content-type"]);

  next();
});

app.get("/views/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.render("index", { users });
  } catch (error) {}
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 8082;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
