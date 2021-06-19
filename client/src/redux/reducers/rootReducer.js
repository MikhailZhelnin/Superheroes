import { combineReducers } from 'redux';

import superheroes from './superheroesReducer';

const rootReducer = combineReducers({
  superheroes,
});

export default rootReducer;
