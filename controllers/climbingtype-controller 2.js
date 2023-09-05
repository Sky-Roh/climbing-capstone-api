const { ClimbingTypes } = require("../sequelize/models");

const createClimbingType = async (req, res) => {
  try {
    const type = await ClimbingTypes.create(req.body);
    return res.status(201).json(type);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllClimbingType = async (req, res) => {
  try {
    const type = await ClimbingTypes.findAll();
    return res.status(200).json(type);
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
};

const updateClimbingType = async (req, res) => {
  try {
    const { id } = req.params;

    const type = await ClimbingTypes.findByPk(id);
    if (!type) {
      return res.status(404).json({ error: "Type not found" });
    }
    await type.update(req.body);
    return res.status(200).json(type);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteClimbingType = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const type = await ClimbingTypes.findByPk(id);
    if (!type) {
      return res.status(404).json({ error: "Type not found" });
    }
    await type.destroy();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createClimbingType,
  getAllClimbingType,
  updateClimbingType,
  deleteClimbingType
};
