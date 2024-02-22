import React, { useState } from 'react'
import movies from './data/movie.json'
const Home = () => {
   

  return (
    <div className='main'>
       <div className='content'>
            <h1>
                Explore
            </h1>
            <h3>
            What are you gonna watch today ?
            </h3>
        </div> 
            <div className='update'>
            <div className='img'>
            <div className='header'>
               <p className='titile'></p>
               <p className='lead'>  </p>
            </div>
            </div>
        </div>

        <div className='body'>
            <div className='Latest-release'>
                <p className='NewRelease'>New Release</p>
            </div>
        <div className='card_movie'>
        <div className='one'>
            <p className='ep'>
            Episode 1010
            </p>
            <p className='name1'>One Piece</p>
        </div>
        </div>
        <div className='card_movie2'>
        <div className='boruto'>
            <p className='ep'>
            Episode 250
            </p>
            <p className='name1'>Boruto Naruto Next Generations</p>
        </div>
        </div>
        <div className='card_movie3'>
        <div className='spy'>
            <p className='ep'>
            Episode 07
            </p>
            <p className='name1'>Spy X Family</p>
        </div>
        </div>
        <div className='card_movie4'>
        <div className='attackontitan1'>
            <p className='ep'>
            Episode 28
            </p>
            <p className='name1'>Shingeki no kyoujin</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home