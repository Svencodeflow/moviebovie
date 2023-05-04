import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import Select from 'react-select';

function Header(props) {
    const [genres, setGenres] = useState([]);

    const customStyles = {
        control: (provided) => ({
            ...provided,
            height: '30px',
            margin: 'auto 0',
            backgroundColor: '#1A2634',
            fontFamily: 'roboto',
            color: 'white',
            borderRadius: '27px',
            borderColor: '#1A2634',
            padding: '0 10px',
            width: '23.26vw',
            border: 'none',
            borderBottom: '1px solid #ddd',
            boxShadow: 'none',
            '&:hover': {
                borderBottom: '1px solid #21E18C',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            '.myDropDown__dropdown-indicator': {
                color: '#21E18C',
            },
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#21E18C',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#21E18C' : 'white',
            color: state.isSelected ? 'white' : 'black',
            '&:hover': {
                backgroundColor: state.isSelected ? '#21E18C' : '#eee',
                color: state.isSelected ? 'white' : 'black',
            },
        }),

    };


    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/genre/movie/list?api_key=e41f6211b1b120a0d9981019e184caba'
        )
            .then((response) => response.json())
            .then((data) => {
                setGenres(data.genres);
            });
    }, []);

    const handleSelect = (selectedOption) => {
        props.setSelectedGenreId(selectedOption.value);
    };

    const options = genres.map((genre) => ({
        value: genre.id,
        label: genre.name,
    }));

    return (
        <div className="header">
            <h1 className="header__hl">Popular Movies</h1>
            <Select
                styles={customStyles}
                classNamePrefix="myDropDown"
                options={options}
                value={
                    props.selectedGenreId
                        ? options.find((option) => option.value === props.selectedGenreId)
                        : null
                }
                onChange={handleSelect}
                placeholder="Genre"
            />
        </div>
    );
}

export default Header;
