import React, { useEffect, useState } from 'react'
import vendetta from '../assets/vendetta movie poster.jpg'
import Spinner from '../components/ui/Spinner';

const Vendetta = () => {

    const [isLoading, setIsLoading] = useState(true);

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
  return (
    <div className="movie__container">
    <div className="movie__row">
    <div className="movie__selected">
            <figure className="movie__selected--figure">
                <img 
                src={vendetta} 
                alt="" 
                className="movie__selected--img" />
            </figure>
            <div className="movie__selected--desc">
                <h1 className="movie__selected--title">
                V for Vendetta
                </h1>
                <h2 className="movie__selected--year">
                    2005
                </h2>
                <h3 className="movie__selected--genre">
                Action, Drama, Sci-Fi
                </h3>
                <h4 className="movie__selected--cast">
                Hugo Weaving, Natalie Portman, Rupert Graves
                </h4>
                <p className="movie__selected--plot">
                In a future British dystopian society, a shadowy freedom fighter, known only by the alias of \"V\", plots to overthrow the tyrannical government - with the help of a young woman.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Vendetta;