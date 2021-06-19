import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getSuperheroes } from './redux/actionCreators/superheroes';

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import CreatePage from './pages/CreatePage/CreatePage';
import EditPage from './pages/EditPage/EditPage';
import SingleSuperhero from './pages/SingleSuperheroPage/SingleSuperhero';
import Modal from './components/Modal/Modal';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const superheroes = useSelector((state) => state.superheroes);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    dispatch(getSuperheroes());
  }, [dispatch]);

  console.log('render');

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <HomePage superheroes={superheroes} />} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/edit/:id" render={() => <EditPage superheroes={superheroes} />} />
          <Route
            exact
            path="/superhero/:id"
            render={() => (
              <SingleSuperhero superheroes={superheroes} setModalImage={setModalImage} />
            )}
          />
        </Switch>
        {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
