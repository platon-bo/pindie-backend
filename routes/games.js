const gamesRouter = require("express").Router();

const {
  sendAllGames,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
  sendGameById,
} = require("../controllers/games");
const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
} = require("../middlewares/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;
