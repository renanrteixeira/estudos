const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello world!</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      dados: [
        { nome: "Andre", email: "andre@email.com" },
        { nome: "Lucas", email: "lucas@email.com" },
        { nome: "Silvio", email: "silvio@email.com" },
        { nome: "Mara", email: "mara@email.com" },
      ],
    },
    {
      estados: [
        { nome: "Bahia", sigla: "BA" },
        { nome: "São Paulo", sigla: "SP" },
        { nome: "Paraná", email: "PR" },
        { nome: "Acre", email: "AC" },
      ],
    },
  ];
  res.status(200).json(users);
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
