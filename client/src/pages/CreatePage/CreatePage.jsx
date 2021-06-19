import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { createSuperhero } from '../../redux/actionCreators/superheroes';

import { BsCardImage } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

import './CreatePage.css';

const CreatePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [postData, setPostData] = useState({
    nickname: '',
    real_name: '',
    description: '',
    superpowers: '',
    catch_phrase: '',
    images: [],
  });
  const [selectedImages, setSelectedImages] = useState({
    imagesPreview: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSuperhero(postData));
    history.push('/');
  };

  const uploadFileHandler = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    files.forEach((file) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPostData((prevState) => ({ ...postData, images: [...prevState.images, reader.result] }));
        setSelectedImages((prevState) => ({
          imagesPreview: [...prevState.imagesPreview, reader.result],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  console.log(postData);

  const handleDelete = (selectedImage) => {
    const result = selectedImages.imagesPreview.filter((img) => img !== selectedImage);
    setSelectedImages({ imagesPreview: [...result] });
    setPostData({ ...postData, images: [...result] });
  };

  return (
    <div className="create">
      <div className="container">
        <div className="create__wrapper">
          <h2 className="create__title">Create Superhero</h2>
          <form className="create__form" onSubmit={handleSubmit}>
            <div className="create__form-control">
              <label htmlFor="">Nickname: </label>
              <input
                type="text"
                required
                value={postData.nickname}
                onChange={(e) => setPostData({ ...postData, nickname: e.target.value })}
                placeholder="Enter superhero nickname"
              />
            </div>
            <div className="create__form-control">
              <label htmlFor="">Real name: </label>
              <input
                type="text"
                required
                value={postData.real_name}
                onChange={(e) => setPostData({ ...postData, real_name: e.target.value })}
                placeholder="Enter superhero real name"
              />
            </div>
            <div className="create__form-control">
              <label htmlFor="">Description: </label>
              <textarea
                type="text"
                required
                value={postData.description}
                onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                placeholder="Enter superhero description"
              />
            </div>
            <div className="create__form-control">
              <label htmlFor="">Superpowers: </label>
              <input
                type="text"
                required
                value={postData.superpowers}
                onChange={(e) => setPostData({ ...postData, superpowers: e.target.value })}
                placeholder="Enter superhero powers"
              />
            </div>
            <div className="create__form-control">
              <label htmlFor="">Catch phrase: </label>
              <input
                type="text"
                required
                value={postData.catch_phrase}
                onChange={(e) => setPostData({ ...postData, catch_phrase: e.target.value })}
                placeholder="Enter superhero catch phrase"
              />
            </div>
            <div className="create__form-control">
              <label htmlFor="input" className="create__form-control__labelImg">
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
            <div className="create__form-previewImages">
              {selectedImages.imagesPreview.map((img, index) => (
                <>
                  <div key={index} className="create__form-previewImages__img">
                    <img src={img} alt="superhero preview" />
                    <AiFillCloseCircle
                      className="create__form-previewImages__img-btn"
                      onClick={() => handleDelete(img)}
                    />
                  </div>
                </>
              ))}
            </div>
            <button className="create__form-btn" type="submit">
              Create superhero
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
