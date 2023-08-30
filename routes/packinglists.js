const express = require("express");
const router = express.Router();
const packinglistController = require("../controllers/packinglist-controller.js");

router
  .route("/")
  .get(packinglistController.getAllPackingList)
  .post(packinglistController.createPackingList);

router
  .route("/:id")
  .put(packinglistController.updatePackingList)
  .delete(packinglistController.deletePackingList)

module.exports = router;
