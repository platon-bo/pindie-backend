const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

// const gamesRouter = require("./routes/games");
// const usersRouter = require("./routes/users");
// const categoriesRouter = require("./routes/categories");

const connectToDataBase = require("./database/connect");
const apiRouter = require("./routes/api"); //до того как я имортировал api.js в app.js, он не ругался на старые импорты роутов с играми, пользователями и категориями в api.js

const PORT = 3000;
const app = express();
connectToDataBase();

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  apiRouter
  //   usersRouter,
  //   gamesRouter,
  //   categoriesRouter
);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
