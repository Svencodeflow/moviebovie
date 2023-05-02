import React, { useState } from 'react';
import Header from "../components/Header";
import MovieDetails from '../components/MovieDetails';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import '../css/Home.css';


const Home = () => {
    const [message, setMessage] = useState('')
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([]);
    const [selectedGenreId, setSelectedGenreId] = useState('');



    // Movies fetch
    useEffect(() => {
        if (message === '') {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=e41f6211b1b120a0d9981019e184caba&language=de_DE&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate')
                .then(response => response.json())
                .then(data => setMovies(data.results))
        } else if (message === message) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=e41f6211b1b120a0d9981019e184caba&language=de-DE&query=${message}&page=1&include_adult=false`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        } else if (selectedGenreId === setSelectedGenreId) {
            fetch(`https://api.themoviedb.org/3/${genres}/movie/list?api_key=e41f6211b1b120a0d9981019e184caba&language=de-DE&query=${genres}&page=1&include_adult=false `)
                .then(response => response.json())
                .then(data => {
                    setGenres(data.genres);
                })
        }
    }, [message, genres])

    console.log(setGenres);

    //Genres fetch
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e41f6211b1b120a0d9981019e184caba')
            .then(response => response.json())
            .then(data => {
                setGenres(data.genres);
            })
    }, []);

    return (
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <MovieDetails /> */}
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
                {
                    selectedGenreId === ''
                        ? movies.map((movie) => (
                            <div key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <h3>{movie.title}</h3>
                            </div>
                        ))
                        : genres.map(genre => (
                            <div key={genre.id} value={genre.id}>
                                {genre.title}
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default Home;