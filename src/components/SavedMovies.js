import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../css/SavedMovies.css';
import Button from '@mui/material/Button'

const SavedMovies = () => {

    const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
        const savedMoviesFromStorage = JSON.parse(localStorage.getItem('movies')) || [];
        setSavedMovies(savedMoviesFromStorage);
    }, []);

    console.log(savedMovies);

    const removeMovie = (id) => {
        const savedMoviesFromStorage = JSON.parse(localStorage.getItem('movies')) || [];
        const updatedMovies = savedMoviesFromStorage.filter(movie => movie.id !== id);
        localStorage.setItem('movies', JSON.stringify(updatedMovies));
        setSavedMovies(updatedMovies);
    }

    return (
        <div>
            <Navbar />
            <div className='img_img'>
                <h1>Favoriten Liste</h1>
                <div className='saved_flex'>
                    {savedMovies.map(movie => (
                        <div key={movie.id}>
                            <h2>{movie.title}</h2>
                            <Link to={`/moviedetails/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} /></Link>
                            <div className='fav_remove' >
                                <Button onClick={() => removeMovie(movie.id)} variant="outlined" color="error" >Entfernen</Button>
                            </div>
                        </div>
                    ))}
                    <div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default SavedMovies;
