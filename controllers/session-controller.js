const { ClimbingSessions } = require("../sequelize/models");

const createSession = async (req, res) => {
  try {
    const sesh = await ClimbingSessions.create(req.body);
    return res.status(201).json(sesh);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllSessions = async (req, res) => {
  try {
    const session = await ClimbingSessions.findAll();
    return res.status(200).json(session);
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
};

const updateSession = async (req, res) => {
  try {
    const { id } = req.params;

    const session = await climbingsessions.findByPk(id);
    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    await session.update(req.body);
    return res.status(200).json(session);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteSession = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const session = await climbingsessions.findByPk(id);
    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    await session.destroy();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSession,
  getAllSessions,
  updateSession,
  deleteSession
};
