import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

import { BsArrowRight } from 'react-icons/bs';

import Superhero from '../../components/Superhero/Superhero';

import './HomePage.css';

const HomePage = ({ superheroes }) => {
  const [heroes, setHeroes] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const heroesPerPage = 5;
  const pagesVisited = pageNumber * heroesPerPage;

  const displayHeroes = heroes.slice(pagesVisited, pagesVisited + heroesPerPage).map((hero) => {
    return <Superhero key={hero._id} {...hero} />;
  });

  const pageCount = Math.ceil(heroes.length / heroesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setHeroes(superheroes.slice(0, 30));
  }, [superheroes]);

  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <h2 className="home__title">All Superheroes</h2>
          {heroes.length === 0 ? (
            <div className="home__greet">
              <span className="home__greet-title">No superheroes yet</span>
              <Link to="/create" className="home__greet-link">
                Create your first Superhero <BsArrowRight />
              </Link>
            </div>
          ) : (
            <>
              <div className="home__list">{displayHeroes}</div>
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'home__pagination'}
                previousLinkClassName={'home__pagination-prevBtn'}
                nextLinkClassName={'home__pagination-nextBtn'}
                disabledClassName={'home__pagination-disabled'}
                activeClassName={'home__pagination-active'}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
