import React, { useState, useEffect } from 'react';

function Header() {
    const [genres, setGenres] = useState([]);
    const [selectedGenreId, setSelectedGenreId] = useState('');

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=e41f6211b1b120a0d9981019e184caba')
            .then(response => response.json())
            .then(data => {
                setGenres(data.genres);
            })
    }, []);

    function handleSelect(event) {
        setSelectedGenreId(event.target.value);
    }

    return (
        <div className='dropdown'>
            <select className='dropdown__select' id="genre-dropdown" 
            value={selectedGenreId} onChange={handleSelect}>
                <option value="">--Select a genre--</option>
                {genres.map(genre => (
                    <option className='dropdown__option' key={genre.id} 
                    value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Header;
