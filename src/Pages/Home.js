import React, { Fragment ,useState,useEffect} from 'react'
import Banner from '../Components/Banner/Banner';
import RowPoster from '../Components/RowPoster/RowPoster'
import {originals,action,Comedy,horror,romance,trendingMovie,popularMovies} from '../urls'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function Home() {
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      }
      else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <Fragment>
      <Navbar  black={blackHeader}/>
        <Banner/>
     <RowPoster url={originals} title="Netflix Orginals"/>
     <RowPoster url={trendingMovie} title="Trending Movie" isSmall/>
     <RowPoster url={popularMovies} title="Popular Movies" isSmall/>
     <RowPoster url={action} title="Action" isSmall/>
     <RowPoster url={romance} title="Romance" isSmall/>
     <RowPoster url={Comedy} title="Commedy" isSmall/>
     <RowPoster url={horror} title="Horror" isSmall/>
     <Footer/>
    </Fragment>
  )
}

export default Home