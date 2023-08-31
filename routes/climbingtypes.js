const express = require("express");
const router = express.Router();
const climbingtypeController = require("../controllers/climbingtype-controller.js");

router
  .route("/")
  .get(climbingtypeController.getAllClimbingType)
  .post(climbingtypeController.createClimbingType);

router
  .route("/:id")
  .put(climbingtypeController.updateClimbingType)
  .delete(climbingtypeController.deleteClimbingType)

module.exports = router;
