import React from 'react';
import { Link } from 'react-router-dom';

import './Superhero.css';

const Superhero = ({ _id, nickname, images }) => {
  return (
    <div className="superhero">
      <div className="superhero__img">
        <img src={images[0]} alt={nickname} />
      </div>
      <span className="superhero__nickname">{nickname}</span>
      <div className="superhero__actions">
        <Link to={`/superhero/${_id}`} className="superhero__actions-btn">
          See more info
        </Link>
        <Link to={`/edit/${_id}`} className="superhero__actions-btn">
          Edit superhero
        </Link>
      </div>
    </div>
  );
};

export default Superhero;
