import React from 'react'
import "./Loading.css";
import {BallTriangle} from 'react-loader-spinner'

function Loading({addStyle}) {
  return (
    <div className="loading">
    <BallTriangle
      color="#e50914"
    />
  </div>
  )
}

export default Loading