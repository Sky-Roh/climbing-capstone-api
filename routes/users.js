const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller.js");

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .put(userController.updateUser)
  .delete(userController.deleteUser)

module.exports = router;
