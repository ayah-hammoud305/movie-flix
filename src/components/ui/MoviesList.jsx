import React from 'react'
import { useNavigate } from 'react-router-dom';

const MoviesList = (props) => {

  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
    <div className="movies__list--container">
      <div className="movies__list">
      {props.movies && props.movies.map((movie, index) => 
      <div
      key={index}
      onClick={() => handleMovieClick(movie.imdbID)}
      className="movie">
        <figure className="movie__poster--wrapper">
        <img className='movie__poster' src={movie.Poster} />
      </figure>
      
      <div className="movie__desc">
        <p className="movie__title">{movie.Title}</p>
        <p className="movie__type">{movie.Type}</p>
      </div>
      </div>
    )}
    </div>
    </div>
    </>
  )
}

export default MoviesList;