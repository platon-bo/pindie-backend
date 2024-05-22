const usersRouter = require("express").Router();

const { sendMe } = require("../controllers/auth");
const {
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");
const {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  hashPassword,
} = require("../middlewares/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users:id", findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post(
  "/users",
  findAllUsers,
  hashPassword,
  checkAuth,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  findUserById,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
