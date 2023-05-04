
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import '../css/MovieDetails.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from '@mui/material/Button'

const MovieDetails = () => {

    const params = useParams();
    const movieId = params.id;

    const [movieDetails, setMovieDetails] = useState([]);
    const [movieTrailer, setMovieTrailer] = useState([]);
    const [message, setMessage] = useState('');


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e41f6211b1b120a0d9981019e184caba&language=de-DE`)
            .then(res => res.json())
            .then(json => {
                setMovieDetails(json);
            })
            .catch(err => {
                console.log(err);
            });
    }, [movieId]);


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e41f6211b1b120a0d9981019e184caba`)
            .then(res => res.json())
            .then(data => {
                setMovieTrailer(data.results[0]);
            })
            .catch(err => {
                console.log(err);
            });

    }, [movieId]);

    const saveMovie = () => {
        const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
        savedMovies.push(movieDetails);
        localStorage.setItem('movies', JSON.stringify(savedMovies));
        // window.alert('Film wurde gespeichert');
    };


    const d = new Date(movieDetails.release_date);
    const releaseDate = d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

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

        if (Array.isArray(genreIds)) {
            return genreIds.map(genreId => genres[genreId]).join(", ");
        }
        else {
            return '';
        }
    };



    return (
        <div>
            <Navbar
                message={message}
                setMessage={setMessage}
            />

            <section className="movieDetails">
                <div className="movieDetailsPicInfo">
                    <div className="movieDetailsTitlePicture">
                        <h2>{movieDetails.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.original_title} />
                    </div>
                    <div className="movieDetailsInfo">
                        <div className="detailsWrapper">
                            <div className="release">
                                <h3>Release Date</h3>
                                <p>{releaseDate}</p>
                            </div>
                            <div className="genres">
                                <h3>Genres</h3>
                                <p>{getGenreNames(movieDetails.genres?.map(genre => genre.id))}</p>
                            </div>
                            <div className="overview">
                                <h3>Handlung</h3>
                                <p>{movieDetails.overview}</p>
                            </div>
                            <div className="voting">
                                <h3>User Bewertung</h3>
                                <p>{movieDetails?.vote_average?.toFixed(1)}</p>
                            </div>
                            <div className="download">
                                <h3>Watch Trailer</h3>
                                <div className="download_button">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="hvr-radial-out">FREE DOWNLOAD</a>
                                    <Button onClick={saveMovie} variant="outlined">Save Favorit</Button>
                                </div>
                            </div>
                        </div>
                        <div className="trailer">
                            {movieTrailer && (
                                <iframe
                                    title="Movie Trailer"
                                    width="450"
                                    height="240"
                                    src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                                ></iframe>
                            )}
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default MovieDetails;