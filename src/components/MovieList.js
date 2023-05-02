import MovieItems from './MovieItems';
import { useState, useEffect } from 'react';
import '../css/MovieList.css';

const MovieList = () => {
    const [allMovies, setAllMovies] = useState([]);
    useEffect(() => {
        fetch('http://api.themoviedb.org/3/movie/popular?api_key=e41f6211b1b120a0d9981019e184caba')
            .then(res => res.json())
            .then(json => {
                setAllMovies(json.results);
            });
    }, []);

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
        <section className="movieList">
            <div>
                {allMovies.map((elt) => {
                    return (
                        <MovieItems
                            key={elt.id}
                            rating={elt.vote_average}
                            image={elt.poster_path}
                            year={elt.release_date}
                            // genres mappen
                            genre={getGenreNames(elt.genre_ids)}
                            title={elt.title}
                            overview={elt.overview}
                        />
                    )
                })}
            </div>
        </section>
    );
}

export default MovieList;