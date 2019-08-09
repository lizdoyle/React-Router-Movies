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

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/movielist" render={() => <MovieList movieList={MovieList}/>}>MovieList</Route>
      <Route path="/movies/:id" render={() => <Movie movie={Movie}/>}>Movies</Route>
    </div>
  );
};

export default App;
