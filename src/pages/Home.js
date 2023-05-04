// React
import React from 'react';
// CSS
import '../css/Home.css';
// Components
import MovieList from "../components/MovieList";


const Home = () => {
    return (
        <div className="home">
            <MovieList />
        </div>
    );
}
export default Home;