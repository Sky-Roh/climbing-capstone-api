const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 8080;

const { sequelize } = require("./sequelize/models");
const userRouter = require('./routes/users.js')
const goalRouter = require('./routes/goals.js')
const sessionRouter = require('./routes/sessions.js')
const packinglistRouter = require('./routes/packinglists.js')

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.use("/users", userRouter)
app.use("/goals", goalRouter)
app.use("/climbingsession", sessionRouter)
app.use("/packinglist", packinglistRouter)




app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established.");
    console.log(`🚀 Server running on ${PORT}`);
  } catch (error) {
    console.log("Database connection is not working");
  }
});
