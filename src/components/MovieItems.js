const MovieItems = (props) => {
    const year = props.year.slice(0, 4);
    return (
        <article className="movieItems">
            {/* eventuell das image als Link zu MovieDetails verlinken */}
            <p>{props.rating}</p>
            <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="movie cover photo" />
            <h3>{year} - {props.genre}</h3>
            <h2>{props.title}</h2>
        </article>

    );
}

export default MovieItems;