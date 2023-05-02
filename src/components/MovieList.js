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
                console.log(json);
            });
    }, [])


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
                            // genre={elt.genre_ids}
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