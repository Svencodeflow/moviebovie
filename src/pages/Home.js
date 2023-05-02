// Components
import Header from "../components/Header";
import Navbar from '../components/Navbar';

// React
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// CSS
import '../css/Home.css';


const Home = () => {
    const [message, setMessage] = useState('');
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenreId, setSelectedGenreId] = useState('');



    // Movies fetch
    useEffect(() => {
        if (message === '' && selectedGenreId === '') {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=e41f6211b1b120a0d9981019e184caba&language=de_DE&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate')
                .then(response => response.json())
                .then(data => setMovies(data.results))
        } else if (selectedGenreId === selectedGenreId && message === '') {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e41f6211b1b120a0d9981019e184caba&with_genres=${selectedGenreId}&language=de_DE&sort_by=popularity.desc`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        } else if (message === message && selectedGenreId === '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=e41f6211b1b120a0d9981019e184caba&language=de-DE&query=${message}&page=1&include_adult=false`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        }

    }, [message, selectedGenreId])

    console.log(movies);

    return (
        <div className="home">
            <Navbar
                message={message}
                setMessage={setMessage}
            />
            <Header
                genres={genres}
                setGenres={setGenres}
                selectedGenreId={selectedGenreId}
                setSelectedGenreId={setSelectedGenreId}
            />
            <div className='filme'>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <Link to={`/moviedetails/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></Link>
                            <h3>{movie.title}</h3>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}
export default Home;