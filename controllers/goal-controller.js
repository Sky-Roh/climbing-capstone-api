const { GoalSettings } = require("../sequelize/models");

const createGoal = async (req, res) => {
  try {
    const goal = await GoalSettings.create(req.body);
    return res.status(201).json(goal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllGoals = async (req, res) => {
  try {
    const goals = await GoalSettings.findAll();
    return res.status(200).json(goals);
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
};

const getOneGoal = async (req, res) => {
  const goalId = req.params.id;

  try {
    const goalItem = await GoalSettings.findOne({
      where: { goal_id: goalId },
    });

    if (!goalItem) {
      return res.status(404).json({ message: "Goal is not found" });
    }

    return res.status(200).json(goalItem);
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).send("Internal Server Error");
  }
};

const updateGoal = async (req, res) => {
  try {
    const { id } = req.params;

    const goal = await GoalSettings.findByPk(id);
    if (!goal) {
      return res.status(404).json({ error: "Goal not found" });
    }
    await goal.update(req.body);
    return res.status(200).json(goal);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const goal = await GoalSettings.findByPk(id);
    if (!goal) {
      return res.status(404).json({ error: "Goal not found" });
    }
    await goal.destroy();
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createGoal,
  getOneGoal,
  getAllGoals,
  updateGoal,
  deleteGoal
};
