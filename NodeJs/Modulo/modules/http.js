const http = require("http");

const port = 8082;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>home page<h1>");
  }

  if (req.url == "/users") {
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
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
