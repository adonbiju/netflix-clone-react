import React, { useEffect, useState } from 'react'
import { imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import './RowPoster.css'


function RowPoster(props) {
  const [movie, setmovie] = useState([])

  useEffect(() => {
    axios.get(props.url).then((Response)=>{
     // console.log(Response.data)
     setmovie(Response.data.results)
    }).catch(function (error) {
      console.log(error)
    })
  }, [])

  return (
    <div className='row'>
          <h2>{props.title}</h2>
            <div className='posters'>
              {
                movie.map((obj)=>
                <img  className={props.isSmall?'smallposter':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )
                
              }                    
            </div>

    
    </div>
  )
}

export default RowPoster