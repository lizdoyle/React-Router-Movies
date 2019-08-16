import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const MovieList = props => {
  console.log("I am running");
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <div className="movie-card">
      <Link to= { `/movies/${movie.id}` }><a href="">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
      </a></Link>
    </div>
  );
  //
  // function showMovie(props) {
  //   props.history.push(`/movies/`)
  //   console.log(props.historyß)

// }
}

export default MovieList;
