import express from 'express';

import {
  getAllSuperheroes,
  createSuperhero,
  updateSuperhero,
  deleteSuperhero,
} from '../controllers/superheroesController.js';

const superheroesRoute = express.Router();

superheroesRoute.get('/', getAllSuperheroes);
superheroesRoute.post('/create', createSuperhero);
superheroesRoute.patch('/:id', updateSuperhero);
superheroesRoute.delete('/:id', deleteSuperhero);

export default superheroesRoute;
