import { Link } from "react-router-dom";

const MovieItems = (props) => {

    console.log(props);

    const year = props.year.slice(0, 4);
    return (
        <article className="movieItems">
            <p>{props.rating}</p>
            <Link to={`/moviedetails/${props.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt={`${props.title}`} /></Link>
            <h3>{year} - {props.genre}</h3>
            <h2>{props.title}</h2>
        </article>

    );
}

export default MovieItems;