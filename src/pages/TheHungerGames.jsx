import React, { useEffect, useState } from 'react'
import catchingfire from '../assets/catching fire poster.jpg'
import Spinner from '../components/ui/Spinner';

const TheHungerGames = () => {

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
                src={catchingfire} 
                alt="" 
                className="movie__selected--img" />
            </figure>
            <div className="movie__selected--desc">
                <h1 className="movie__selected--title">
                    The Hunger Games: Catching Fire
                </h1>
                <h2 className="movie__selected--year">
                    2013
                </h2>
                <h3 className="movie__selected--genre">
                Action, Adventure, Sci-Fi
                </h3>
                <h4 className="movie__selected--cast">
                Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth
                </h4>
                <p className="movie__selected--plot">
                Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default TheHungerGames