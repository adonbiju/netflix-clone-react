import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
     //console.log(Response.data.results[0])
     setMovie(Response.data.results[Math.floor(Math.random() * 20) + 1])
   }).catch(function (error) {
    console.log(error);
  })
  }, [])
  
  return (
    <div className='banner'
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie? movie.title:""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""} </h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner