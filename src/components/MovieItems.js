const MovieItems = (props) => {
    return (
        <article className="movieItems">
            {/* eventuell das image als Link zu MovieDetails verlinken */}
            <p>{props.rating}</p>
            <img src={props.image} alt="movie cover photo" />
            <h3>{props.year} - {props.genre}</h3>
            <h2>{props.title}</h2>
        </article>
    );
}

export default MovieItems;