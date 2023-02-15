const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.9yzwnha.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          `Erro ao conectar ao banco de dados. Erro: ${error}.`
        );
      }

      return console.log("Conexão realizada com sucesso!");
    }
  );
};

module.exports = connect;
