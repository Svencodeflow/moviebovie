import MovieItems from './MovieItems'

const MovieList = () => {
    //FETCH KORRIGIEREN
    const [allMovies, setAllMovies] = useState([])
    useEffect(() => {
        fetch(``)
            .then(res => res.json())
            .then(data => setAllMovies(data.movies))
    }, [])

    return (
        // Navbar, Header, Footer einbauen (unten)
        <section className="movieList">
            {/* Navbar */}
            {/* Header */}
            {/* Footer */}

            <div>
                {allMovies.map((elt) => {
                    return (
                        <MovieItems
                            // KEY setzen
                            // key={elt.id}
                            rating={elt.rating}
                            image={elt.image}
                            year={elt.year}
                            // muss evtl. nochmal gemapped werden
                            genre={elt.genre}
                            title={elt.title}
                        />
                    )
                })}
            </div>

        </section>
    );
}

export default MovieList;