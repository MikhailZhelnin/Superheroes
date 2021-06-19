import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
  nickname: {
    type: String,
    require: true,
  },
  real_name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  superpowers: {
    type: String,
    require: true,
  },
  catch_phrase: {
    type: String,
    require: true,
  },
  images: [{ type: String }],
});

const Superhero = mongoose.model('superhero', superheroSchema);

export default Superhero;
