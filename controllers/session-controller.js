const { ClimbingSessions, sequelize } = require("../models");
const { QueryTypes } = require('sequelize');

const createSession = async (req, res) => {
  try {
    const sesh = await ClimbingSessions.create(req.body);
    return res.status(201).json(sesh);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOneSession = async (req, res) => {
  const sessionId = req.params.id; // Assuming you pass the session ID as a route parameter

  try {
    const session = await sequelize.query(`
      SELECT
        cs.session_id,
        cs.session_date,
        cs.location,
        cs.grade,
        cs.duration,
        cs.description,
        cs.type_id,
        cs.user_id,
        cs."createdAt",
        cs."updatedAt",
        ct."type_name"
      FROM "ClimbingSessions" cs
      JOIN "ClimbingTypes" ct ON cs."type_id" = ct."type_id"
      WHERE cs.session_id = :sessionId
    `, {
      replacements: { sessionId }, 
      type: QueryTypes.SELECT,
    });

    if (!session || session.length === 0) {
      return res.status(404).json({ message: "Session not found" });
    }

    return res.status(200).json(session[0]); // Assuming you expect a single session
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
};


// get all sessions with type_name
const getAllSessions = async (req, res) => {
  try {
    const sessions = await sequelize.query(`
      SELECT
        cs.session_id,
        cs.session_date,
        cs.location,
        cs.grade,
        cs.duration,
        cs.description,
        cs.type_id,
        cs.user_id,
        cs."createdAt",
        cs."updatedAt",
        ct."type_name"
      FROM "ClimbingSessions" cs
      JOIN "ClimbingTypes" ct ON cs."type_id" = ct."type_id"
      ORDER BY cs.session_date DESC
    `, {
      type: QueryTypes.SELECT,
    })
    return res.status(200).json(sessions);
  }
   catch (err) {
    console.log("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
}

const updateSession = async (req, res) => {
  try {
    const { id } = req.params;

    const session = await ClimbingSessions.findByPk(id);
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
    const session = await ClimbingSessions.findByPk(id);
    console.log(session)
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
  getOneSession,
  getAllSessions,
  updateSession,
  deleteSession
};
