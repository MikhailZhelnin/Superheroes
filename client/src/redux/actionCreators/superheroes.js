import * as api from '../../api/index';
import * as actionTypes from '../types/actionTypes';

export const getSuperheroes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSuperheroes();
    dispatch({ type: actionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSuperhero = (superhero) => async (dispatch) => {
  try {
    const { data } = await api.createSuperhero(superhero);
    dispatch({ type: actionTypes.CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSuperhero = (id, hero) => async (dispatch) => {
  try {
    const { data } = await api.updateSuperhero(id, hero);
    dispatch({ type: actionTypes.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSuperhero = (id) => async (dispatch) => {
  try {
    await api.deleteSuperhero(id);
    dispatch({ type: actionTypes.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
