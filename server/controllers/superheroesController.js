import Superhero from '../models/Superhero.js';

export const getAllSuperheroes = async (req, res) => {
  try {
    const allSuperheroes = await Superhero.find();
    res.status(200).json(allSuperheroes);
  } catch (error) {
    console.error(error);
  }
};

export const createSuperhero = async (req, res) => {
  const superhero = req.body;
  const newSuperhero = new Superhero(superhero);
  try {
    await newSuperhero.save();
    res.status(201).json(newSuperhero);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateSuperhero = async (req, res) => {
  const { id: _id } = req.params;
  const hero = req.body;
  const updatedSuperhero = await Superhero.findByIdAndUpdate(_id, { ...hero, _id }, { new: true });
  res.json(updatedSuperhero);
};

export const deleteSuperhero = async (req, res) => {
  const { id } = req.params;
  await Superhero.findByIdAndRemove(id);
  res.json({ message: 'Post deleted successfully' });
};
