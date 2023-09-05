const express = require("express");
const router = express.Router();
const goalController = require("../controllers/goal-controller.js");

router
  .route("/")
  .get(goalController.getAllGoals)
  .post(goalController.createGoal);

router
  .route("/:id")
  .get(goalController.getOneGoal)
  .put(goalController.updateGoal)
  .delete(goalController.deleteGoal)

module.exports = router;