const { PackingLists } = require("../sequelize/models");

const createPackingList = async (req, res) => {
  try {
    const list = await PackingLists.create(req.body);
    return res.status(201).json(list);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOnePackingList = async (req, res) => {
  const packingListItemId = req.params.id;

  try {
    const packingListItem = await PackingLists.findOne({
      where: { packing_id: packingListItemId },
    });

    if (!packingListItem) {
      return res.status(404).json({ message: "Packing list item not found" });
    }

    return res.status(200).json(packingListItem);
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
};

const getAllPackingList = async (req, res) => {
  try {
    const list = await PackingLists.findAll();
    return res.status(200).json(list);
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
};

const updatePackingList = async (req, res) => {
  try {
    const { id } = req.params;

    const list = await PackingLists.findByPk(id);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    await list.update(req.body);
    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deletePackingList = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const list = await PackingLists.findByPk(id);
    if (!list) {
      return res.status(404).json({ error: "List not found" });
    }
    await list.destroy();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPackingList,
  getOnePackingList,
  getAllPackingList,
  updatePackingList,
  deletePackingList,
};
