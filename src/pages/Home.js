import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <div>
        <HomeController>
            <Navbar/>
            <Featured/>

            <MovieList/>
            <MovieList/>
            <MovieList/>
            <MovieList/>
        </HomeController>
    </div>
  )
};

export default Home;

const HomeController = styled.div`
    background-color: #0b0b0b;
    overflow:hidden;
`