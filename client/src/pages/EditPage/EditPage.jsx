import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

import { BsCardImage } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

import { updateSuperhero, deleteSuperhero } from '../../redux/actionCreators/superheroes';

import './EditPage.css';

const EditPage = ({ superheroes }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [editedSuperhero, setEditedSuperhero] = useState({
    nickname: '',
    real_name: '',
    description: '',
    superpowers: '',
    catch_phrase: '',
    images: [],
  });

  useEffect(() => {
    const hero = superheroes.filter((item) => item._id === id);
    setEditedSuperhero(...hero);
  }, [superheroes, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSuperhero(id, editedSuperhero));
    history.push('/');
  };

  const uploadFileHandler = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    files.forEach((file) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setEditedSuperhero((prevState) => ({
          ...editedSuperhero,
          images: [...prevState.images, reader.result],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteImage = (selectedImage) => {
    const result = editedSuperhero.images.filter((img) => img !== selectedImage);
    setEditedSuperhero({ ...editedSuperhero, images: [...result] });
  };

  const handleDeleteSuperhero = (id) => {
    dispatch(deleteSuperhero(id));
    history.push('/');
  };

  console.log(editedSuperhero);

  return (
    <div className="edit">
      <div className="container">
        <div className="edit__wrapper">
          <h2 className="edit__title">Edit Superhero</h2>
          <form className="edit__form" onSubmit={handleSubmit} noValidate>
            <div className="edit__form-control">
              <label htmlFor="">Nickname: </label>
              <input
                type="text"
                value={editedSuperhero.nickname}
                onChange={(e) =>
                  setEditedSuperhero({ ...editedSuperhero, nickname: e.target.value })
                }
              />
            </div>
            <div className="edit__form-control">
              <label htmlFor="">Real name: </label>
              <input
                type="text"
                value={editedSuperhero.real_name}
                onChange={(e) =>
                  setEditedSuperhero({ ...editedSuperhero, real_name: e.target.value })
                }
              />
            </div>
            <div className="edit__form-control">
              <label htmlFor="">Description: </label>
              <textarea
                value={editedSuperhero.description}
                onChange={(e) =>
                  setEditedSuperhero({ ...editedSuperhero, description: e.target.value })
                }
              />
            </div>
            <div className="edit__form-control">
              <label htmlFor="">Superpowers: </label>
              <input
                type="text"
                value={editedSuperhero.superpowers}
                onChange={(e) =>
                  setEditedSuperhero({ ...editedSuperhero, superpowers: e.target.value })
                }
              />
            </div>
            <div className="edit__form-control">
              <label htmlFor="">Catch phrase: </label>
              <input
                type="text"
                value={editedSuperhero.catch_phrase}
                onChange={(e) =>
                  setEditedSuperhero({ ...editedSuperhero, catch_phrase: e.target.value })
                }
              />
            </div>

            <div className="edit__form-control">
              <label htmlFor="input" className="edit__form-control__labelImg">
                Click to add one or more images: <BsCardImage />
              </label>
              <input
                type="file"
                required
                id="input"
                accept="image/*"
                multiple
                onChange={uploadFileHandler}
              />
            </div>

            <div className="edit__form-previewImages">
              {editedSuperhero.images.map((img, index) => (
                <>
                  <div key={index} className="edit__form-previewImages__img">
                    <img src={img} alt="superhero preview" />
                    <AiFillCloseCircle
                      className="edit__form-previewImages__img-btn"
                      onClick={() => handleDeleteImage(img)}
                    />
                  </div>
                </>
              ))}
            </div>
            <button className="edit__form-btn" type="submit">
              Update superhero
            </button>
          </form>
          <button className="edit__btn-delete" onClick={() => handleDeleteSuperhero(id)}>
            Delete superhero
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
