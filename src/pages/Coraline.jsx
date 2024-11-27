import React, { useEffect, useState } from 'react'
import coraline from '../assets/coraline movie poster.jpg'
import Spinner from '../components/ui/Spinner';

const Coraline = () => {
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
                src={coraline} 
                alt="" 
                className="movie__selected--img" />
            </figure>
            <div className="movie__selected--desc">
                <h1 className="movie__selected--title">
                    Coraline
                </h1>
                <h2 className="movie__selected--year">
                    2009
                </h2>
                <h3 className="movie__selected--genre">
                Animation, Drama, Family
                </h3>
                <h4 className="movie__selected--cast">
                Dakota Fanning, Teri Hatcher, John Hodgman
                </h4>
                <p className="movie__selected--plot">
                Wandering her rambling old house in her boring new town, an 11-year-old Coraline discovers a hidden door to a strangely idealized version of her life. In order to stay in the fantasy, she must make a frighteningly real sacrifice.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Coraline