import { Link } from "react-router-dom";
import '../css/MovieItems.css';

const MovieItems = (props) => {
    console.log(props.year);

    const years = props.year.slice(0, 4);
    return (
        <article className="movieItems">
            <article>

                <p className="test">{props.rating}</p>
                <figure>
                    <Link to={`/moviedetails/${props.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={`${props.title}`} /></Link>
                </figure>
            </article>
            <h3>{years} - {props.genre}</h3>
            <h2>{props.title}</h2>
        </article>

    );
}

export default MovieItems;