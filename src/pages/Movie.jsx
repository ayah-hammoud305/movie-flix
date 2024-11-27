import React, { useEffect, useState } from 'react'
import Spinner from '../components/ui/Spinner';
import { useParams } from 'react-router-dom';

const Movie = (props) => {
    
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=ed88fe15`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return (
        <div className="movie__container">
            <Spinner />
        </div>
    )
  }

  if (!movie) {
    return <div className="movie__container">Movie not found.</div>;
  }

  return (
    <div className="movie__container">
        <div className="movie__row">
        <div className="movie__selected">
                <figure className="movie__selected--figure">
                    <img 
                    src={movie.Poster} 
                    alt="" 
                    className="movie__selected--img" />
                </figure>
                <div className="movie__selected--desc">
                    <h1 className="movie__selected--title">
                        {movie.Title}
                    </h1>
                    <h2 className="movie__selected--year">
                        {movie.Year}
                    </h2>
                    <h3 className="movie__selected--genre">
                        {movie.Genre}
                    </h3>
                    <h4 className="movie__selected--cast">
                        {movie.Actors}
                    </h4>
                    <p className="movie__selected--plot">
                        {movie.Plot}
                    </p>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Movie