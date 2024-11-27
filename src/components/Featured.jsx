import React from 'react'
import pearl from '../assets/pearl movie poster.jpg'
import halloween from '../assets/halloween movie poster.jpg'
import catchingfire from '../assets/catching fire poster.jpg'
import coraline from '../assets/coraline movie poster.jpg'
import scream6 from '../assets/scream6.jpg'
import vendetta from '../assets/vendetta movie poster.jpg'
import { useNavigate } from 'react-router-dom'

const Featured = () => {

  const navigate = useNavigate();
  const handleMovieClick = (movieTitle) => {
    navigate(`/movie/${movieTitle}`)
  }


  return (
    <section id='featured'>
        <div className="featured__container">
            <h1 className="featured__title">
                Featured Movies
            </h1>
            <hr className='featured__line' />
            <div className="featured__movies--wrapper">
                <div className="featured__movies">
                  <div onClick={() => handleMovieClick('Pearl')} className="featured__movie">
                    <figure className='featured__movie--img-wrapper' >
                      <img src={pearl} className='featured__movie--img' />
                    </figure>
                    <div className="featured__movie--desc">
                      <div className="featured__movie--title">
                        Pearl
                      </div>
                      <div className="featured__movie--year">
                        2022
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleMovieClick('Halloween')} className="featured__movie">
                    <figure className='featured__movie--img-wrapper' >
                      <img src={halloween} className='featured__movie--img' />
                    </figure>
                    <div className="featured__movie--desc">
                      <div className="featured__movie--title">
                        Halloween
                      </div>
                      <div className="featured__movie--year">
                        1978
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleMovieClick('CatchingFire')} className="featured__movie">
                    <figure className='featured__movie--img-wrapper' >
                      <img src={catchingfire} className='featured__movie--img' />
                    </figure>
                    <div className="featured__movie--desc">
                      <div className="featured__movie--title">
                        The Hunger Games: Catching Fire
                      </div>
                      <div className="featured__movie--year">
                        2013
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleMovieClick('Coraline')} className="featured__movie">
                    <figure className='featured__movie--img-wrapper' >
                      <img src={coraline} className='featured__movie--img' />
                    </figure>
                    <div className="featured__movie--desc">
                      <div className="featured__movie--title">
                        Coraline
                      </div>
                      <div className="featured__movie--year">
                        2009
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleMovieClick('ScreamVI')} className="featured__movie">
                    <figure className='featured__movie--img-wrapper' >
                      <img src={scream6} className='featured__movie--img' />
                    </figure>
                    <div className="featured__movie--desc">
                      <div className="featured__movie--title">
                        Scream VI
                      </div>
                      <div className="featured__movie--year">
                        2023
                      </div>
                    </div>
                  </div>

                  <div onClick={() => handleMovieClick('Vendetta')} className="featured__movie">
                    <figure className='featured__movie--img-wrapper' >
                      <img src={vendetta} className='featured__movie--img' />
                    </figure>
                    <div className="featured__movie--desc">
                      <div className="featured__movie--title">
                        V for Vendetta
                      </div>
                      <div className="featured__movie--year">
                        2005
                      </div>
                    </div>
                  </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured