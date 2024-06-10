import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import { sequelize } from '../../../models/index.js';
import userRouter from '../../../routes/users.js';
import goalRouter from '../../../routes/goals.js';
import sessionRouter from '../../../routes/sessions.js';
import packinglistRouter from '../../../routes/packinglists.js';
import climbingtypeRouter from '../../../routes/climbingtypes.js';

import 'dotenv/config';

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, It is working now');
});

app.use('/users', userRouter);
app.use('/goals', goalRouter);
app.use('/climbingsession', sessionRouter);
app.use('/packinglist', packinglistRouter);
app.use('/climbingtype', climbingtypeRouter);

app.listen(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
  } catch (error) {
    console.log('Database connection is not working', error);
  }
});

export const handler = serverless(app);
