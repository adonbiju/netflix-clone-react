import React, { useEffect, useState } from 'react'
import { imageUrl} from '../../Constants/constants'
import YouTube from 'react-youtube';
import axios from '../../axios'
import { API_KEY } from '../../Constants/constants';
import './RowPoster.css'


function RowPoster(props) {
  const [movie, setmovie] = useState([])
  const [youtubeID,setYoutubeID]=useState('')

  useEffect(() => {
    axios.get(props.url).then((Response)=>{
     // console.log(Response.data)
     setmovie(Response.data.results)
    }).catch(function (error) {
      console.log(error)
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      
    },
  };

  const handleMovie=(id)=>{
    //console.log("hiiiii"+id)
    axios.get( `movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((Response)=>{
      //console.log(Response.data)
      if(Response.data.results.length!==0){
      setYoutubeID(Response.data.results[0])
      }
    }).catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div className='row'>
          <h2>{props.title}</h2>
            <div className='posters'>
              {
                movie.map((obj)=>
                <img  key={obj.id}   onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )
                
              }                    
            </div>
            {youtubeID && <YouTube videoId ={youtubeID.key} opts={opts}/>}

    
    </div>
  )
}

export default RowPoster