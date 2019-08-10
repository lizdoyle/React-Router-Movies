import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// import {Movie, MovieCard, MovieList, SavedList} from './Movies/';

import MovieList from './Movies/MovieList';

import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  // route props is different from props 

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" render={() => <MovieList movieList={MovieList}/>}/>
      <Route path="/movies/:id" render={(routeProps) => <Movie {...routeProps} />}/>
    </div>
  );
};

export default App;
