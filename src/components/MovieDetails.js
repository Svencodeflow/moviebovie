
import { useState, useEffect } from "react"
import '../css/MovieDetails.css'

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=e41f6211b1b120a0d9981019e184caba')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setMovieDetails(json);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const [movieTrailer, setMovieTrailer] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550/videos?api_key=e41f6211b1b120a0d9981019e184caba')
            .then(res => res.json())
            .then(data => {
                setMovieTrailer(data.results[0]);
                console.log(movieTrailer)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (

        <section className="movieDetails">
            <div className="movieDetailsPicInfo">
                <div className="movieDetailsTitlePicture">
                    <h2>{movieDetails.original_title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="movie poster" />
                </div> 
                <div className="movieDetailsInfo">
                    <div className="detailsWrapper">
                        <div className="release">
                            <h3>Release Date</h3>
                            <p>{movieDetails.release_date}</p>
                        </div>
                        <div className="genres">
                            <h3>Genres</h3>
                            <p>{movieDetails.release_date}</p>
                        </div>
                        <div className="voting">
                            <h3>Average Voting</h3>
                            <p>{movieDetails.vote_average}</p>
                        </div>
                        <div className="overview">
                            <h3>Overview</h3>
                            <p>{movieDetails.overview}</p>
                        </div>
                        <div className="download">
                            <a href="https://thumbs.gfycat.com/ImaginativeLinearGreatargus-size_restricted.gif" className="hvr-radial-out">FREE DOWNLOAD</a>
                        </div>
                    </div>
                    <div className="trailer">
                        <h3>Watch Trailer</h3>
                        <iframe width="450" height="240" src={`https://www.youtube.com/embed/${movieTrailer.key}`}></iframe> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;