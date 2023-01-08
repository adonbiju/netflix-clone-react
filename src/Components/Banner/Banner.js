import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import './Banner.css'
import Loading  from '../Loading/Loading'
function Banner() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState()
  useEffect(() => {
   setLoading(true)
   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
     //console.log(Response.data.results[0])
     setMovie(Response.data.results[Math.floor(Math.random() * 20) + 1])
     setLoading(false)
   }).catch(function (error) {
    alert(error)
  })
  }, [])
  
  return (

<section 
    className="featured" 
    style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(transparent, transparent, transparent, #111),url(${movie? imageUrl+movie.backdrop_path:""})`
    }}
>
    {/* Loader */}

    {loading && (
          <Loading />
        )}
    <div className="featured--vertical">
        <div className="featured--horizontal">
            <div className="featured--name">{movie? movie.title:""}</div>
            
            <div className="featured--info">
                <div className="featured--points">{movie? Math.floor(movie.vote_average):""}/10</div>
                <div className="featured--year">{movie? movie.release_date:""}</div>
            </div>

            <div className="featured--description">{movie?movie.overview:""}</div>
            <div className="featured--buttons">
                <a disabled className="featured--watchbutton">Play</a>
                <a disabled className="featured--mylistbutton">My List</a>
            </div>
        </div>
    </div>
</section>
    
  )
}

export default Banner