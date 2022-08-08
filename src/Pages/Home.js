import React, { Fragment } from 'react'
import Banner from '../Components/Banner/Banner';
import RowPoster from '../Components/RowPoster/RowPoster'
import {originals,action,Comedy,horror,romance,trendingMovie,popularMovies} from '../urls'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
function Home() {
  return (
    <Fragment>
      <Navbar/>
        <Banner/>
     <RowPoster url={originals} title="Netflix Orginals"/>
     <RowPoster url={trendingMovie} title="Trending Movie" isSmall/>
     <RowPoster url={popularMovies} title="Popular Movie" isSmall/>
     <RowPoster url={action} title="Action" isSmall/>
     <RowPoster url={romance} title="Romance" isSmall/>
     <RowPoster url={Comedy} title="Commedy" isSmall/>
     <RowPoster url={horror} title="Horror" isSmall/>
     <Footer/>
    </Fragment>
  )
}

export default Home