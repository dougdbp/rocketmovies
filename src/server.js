require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require("express");

migrationsRun();

const app = express();
app.use(express.json())

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));