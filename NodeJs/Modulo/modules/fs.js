const fs = require("fs");
const path = require("path");

// criar pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
  // criar arquivo
  fs.writeFile(
    path.join(__dirname, "/teste", "teste.txt"),
    "Hello node!\n",
    (error) => {
      if (error) {
        return console.log("Erro: ", error);
      }

      console.log("Arquivo criado com sucesso!");
      // adicionar arquivo
      fs.appendFile(
        path.join(__dirname, "/teste", "teste.txt"),
        "Hello World!\n",
        (error) => {
          if (error) {
            return console.log("Erro: ", error);
          }

          console.log("Arquivo criado com sucesso!");
        }
      );
      // ler arquivo
      fs.readFile(
        path.join(__dirname, "/teste", "teste.txt"),
        "utf8",
        (error, data) => {
          if (error) {
            return console.log("Erro: ", error);
          }

          console.log(data);
        }
      );
    }
  );
});
