import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import superheroesRoute from './routes/superheroesRoute.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '50mb', extended: true }));
app.use(cors());

app.use('/superheroes', superheroesRoute);

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () => console.log(`server started on server ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

startApp();
