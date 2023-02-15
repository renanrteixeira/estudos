//const { Person } = require("./person");

//require("./modules/path");

//const person = new Person("Renan");

//console.log(person.sayMyName());

//require("./modules/fs");

//require("./modules/http");

const dotenv = require("dotenv");
const connect = require("./src/database/connect");

dotenv.config();
connect();

require("./modules/express");
