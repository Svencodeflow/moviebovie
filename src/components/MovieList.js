// React
import { useState, useEffect } from 'react';

// CSS
import '../css/MovieList.css';

// components
import Navbar from './Navbar';
import Header from "./Header";
import MovieItems from './MovieItems';
import Footer from './Footer';


const MovieList = () => {
    const [message, setMessage] = useState('');
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenreId, setSelectedGenreId] = useState('');

    useEffect(() => {
        if (message === '' && !selectedGenreId) {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=e41f6211b1b120a0d9981019e184caba&language=de-DE&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate')
                .then(response => response.json())
                .then(data => setMovies(data.results))
        } else if (selectedGenreId) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e41f6211b1b120a0d9981019e184caba&with_genres=${selectedGenreId}&language=de-DE&sort_by=popularity.desc`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        } else if (message) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=e41f6211b1b120a0d9981019e184caba&language=de-DE&query=${message}&page=1&include_adult=false`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        }
    }, [message, selectedGenreId])

    const getGenreNames = (genreIds) => {
        const genres = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western"
        };
        return genreIds.map(genreId => genres[genreId]).join(", ");
    };
    return (
        <div>
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
            <section className="movieList">
                <div>
                    {movies.map((elt) => {
                        return (
                            <MovieItems
                                key={elt.id}
                                rating={elt.vote_average.toFixed(1)}
                                image={elt.poster_path}
                                year={elt.release_date}
                                genre={getGenreNames(elt.genre_ids)}
                                title={elt.title}
                                overview={elt.overview}
                                id={elt.id}
                            />
                        )
                    })}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default MovieList;