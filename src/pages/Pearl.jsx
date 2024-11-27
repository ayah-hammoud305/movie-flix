import React, { useEffect, useState } from 'react'
import pearl from '../assets/pearl movie poster.jpg'
import Spinner from '../components/ui/Spinner';

const Pearl = () => {

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
                src={pearl} 
                alt="" 
                className="movie__selected--img" />
            </figure>
            <div className="movie__selected--desc">
                <h1 className="movie__selected--title">
                    Pearl
                </h1>
                <h2 className="movie__selected--year">
                    2022
                </h2>
                <h3 className="movie__selected--genre">
                Drama, Horror, Thriller
                </h3>
                <h4 className="movie__selected--cast">
                Mia Goth, David Corenswet, Tandi Wright
                </h4>
                <p className="movie__selected--plot">
                In 1918, a young woman on the brink of madness pursues stardom in a desperate attempt to escape the drudgery, isolation, and lovelessness of life on her parents' farm.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Pearl