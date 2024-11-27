import React, { useEffect, useState } from 'react'
import scream6 from '../assets/scream6.jpg'
import Spinner from '../components/ui/Spinner';

const Scream6 = () => {

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
                src={scream6} 
                alt="" 
                className="movie__selected--img" />
            </figure>
            <div className="movie__selected--desc">
                <h1 className="movie__selected--title">
                    Scream VI
                </h1>
                <h2 className="movie__selected--year">
                    2023
                </h2>
                <h3 className="movie__selected--genre">
                Horror, Mystery, Thriller
                </h3>
                <h4 className="movie__selected--cast">
                Courteney Cox, Melissa Barrera, Jenna Ortega
                </h4>
                <p className="movie__selected--plot">
                The survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Scream6