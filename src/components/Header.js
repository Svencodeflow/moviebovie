import React, { useState, useEffect, Fragment } from 'react';
import '../css/Header.css'

function Header(props) {
    // const [selectedGenreId, setSelectedGenreId] = useState('');
    const [genres, setGenres] = useState([]);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e41f6211b1b120a0d9981019e184caba')
            .then(response => response.json())
            .then(data => {
                setGenres(data.genres);
            })
    }, [genres]);

    function handleSelect(event) {
        props.setSelectedGenreId(event.target.value);
    }

    return (
        <div className='header'>
            <h1 className='header__hl'>Popular Movies</h1>
            <select className='header__dropdown__select' id="genre-dropdown"
                value={props.selectedGenreId} onChange={handleSelect}>
                <option value="">--Select a genre--</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}


            </select>
        </div>
    );


}

export default Header;
