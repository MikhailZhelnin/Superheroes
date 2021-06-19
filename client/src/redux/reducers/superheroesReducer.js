import * as actionTypes from '../types/actionTypes';

const superheroes = (superheroes = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...superheroes, action.payload];
    case actionTypes.UPDATE:
      return superheroes.map((hero) => (hero.id === action.payload._id ? action.payload : hero));
    case actionTypes.DELETE:
      return superheroes.filter((post) => post._id !== action.payload);
    default:
      return superheroes;
  }
};

export default superheroes;
