import { useState, useEffect } from 'react';
// import './Navbar.css';
import Lupe from '../images/lupe.png';
import logo from '../images/MOV.png';


const Navbar = (props) => {

    const [fav, setfav] = useState('')

    const [movies, setMovies] = useState([])

    let favList = [""]

    useEffect(() => {
        if (props.message === '') {
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=e41f6211b1b120a0d9981019e184caba&language=de_DE&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate')
                .then(response => response.json())
                .then(data => setMovies(data.results))
        } else if (props.message === props.message) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=e41f6211b1b120a0d9981019e184caba&language=de-DE&query=${props.message}&page=1&include_adult=false`)
                .then(response => response.json())
                .then(data => setMovies(data.results))
        } else if (fav === '') {
            <h1>Deine FavoitenListe ist Leer</h1>
        } else (
            fetch(`https://api.themoviedb.org/3/account/${fav}/favorite?api_key=e41f6211b1b120a0d9981019e184caba`)
                .then(response => response.json())
                .then(data => setfav(data.results))
        )
    }, [props.message, fav])


    console.log(favList);



    const handleMessage = (eventMessage) => {
        props.setMessage(eventMessage.target.value)
    }


    return (
        <nav className='navbar' >
            <div className='logo_movie' >
                <img src={logo} alt='logo' />
            </div>
            <div className='input_field' >
                <input type={props.message} onChange={handleMessage} placeholder='Search something here' />
                <button type={fav}>Favorite</button>
            </div>
            <div className='filme' >
                {movies.map((movie) => {
                    return <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>

                    </div>
                })
                }
            </div>
        </nav >
    );
}

export default Navbar;