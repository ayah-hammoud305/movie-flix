import React, { useEffect, useState } from 'react'
import halloween from '../assets/halloween movie poster.jpg'
import Spinner from '../components/ui/Spinner';

const Halloween = () => {

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
                src={halloween} 
                alt="" 
                className="movie__selected--img" />
            </figure>
            <div className="movie__selected--desc">
                <h1 className="movie__selected--title">
                    Halloween
                </h1>
                <h2 className="movie__selected--year">
                    1978
                </h2>
                <h3 className="movie__selected--genre">
                Horror, Thriller
                </h3>
                <h4 className="movie__selected--cast">
                Donald Pleasence, Jamie Lee Curtis, Tony Moran
                </h4>
                <p className="movie__selected--plot">
                Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois, to kill again.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Halloween