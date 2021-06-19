import axios from 'axios';

const url = 'http://localhost:5000/superheroes';

export const fetchSuperheroes = () => axios.get(url);
export const createSuperhero = (newSuperhero) => axios.post(`${url}/create`, newSuperhero);
export const updateSuperhero = (id, updateHero) => axios.patch(`${url}/${id}`, updateHero);
export const deleteSuperhero = (id) => axios.delete(`${url}/${id}`);
