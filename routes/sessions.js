const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/session-controller.js");

router
  .route("/")
  .get(sessionController.getAllSessions)
  .post(sessionController.createSession);

router
  .route("/:id")
  .get(sessionController.getOneSession)
  .put(sessionController.updateSession)
  .delete(sessionController.deleteSession)

module.exports = router;
