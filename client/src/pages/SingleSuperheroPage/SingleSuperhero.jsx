import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './SingleSuperhero.css';

const SingleSuperhero = ({ superheroes, setModalImage }) => {
  const { id } = useParams();

  const [singleSuperhero, setSingleSuperhero] = useState([]);

  useEffect(() => {
    const hero = superheroes.filter((item) => item._id === id);
    setSingleSuperhero(hero);
  }, [superheroes, id]);

  return (
    <div className="singleHero">
      <div className="container">
        {singleSuperhero.map((hero) => (
          <div key={hero._id} className="singleHero__wrapper">
            <h3 className="singleHero__title">{hero.nickname}</h3>
            <div className="singleHero__content">
              <div className="singleHero__img">
                <img src={hero.images[0]} alt={hero.nickname} />
              </div>

              <div className="singleHero__info">
                <span className="singleHero__info-nickname">
                  <b>Nickname:</b> {hero.nickname}
                </span>
                <span className="singleHero__info-realname">
                  <b>Real name:</b> {hero.real_name}
                </span>
                <div className="singleHero__info-description">
                  <p>
                    <b>Description: </b> {hero.description}
                  </p>
                </div>
                <div className="singleHero__info-superpowers">
                  <b>Superpowers:</b> {hero.superpowers}
                </div>
                <div className="singleHero__info-phrase">
                  <b>Catch phrase:</b> "{hero.catch_phrase}"
                </div>
                <div className="singleHero__info-images">
                  {hero.images.slice(1).map((item, index) => (
                    <div
                      key={index}
                      className="singleHero__info-images__img"
                      onClick={() => setModalImage(item)}>
                      <img src={item} alt="superhero photo" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleSuperhero;
