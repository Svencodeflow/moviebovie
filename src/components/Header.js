import React, { useState, useEffect, useRef } from 'react';
import '../css/Header.css';
import Select from 'react-select';

function Header(props) {
    const [genres, setGenres] = useState([]);
    const menuPortalTarget = useRef(null);

    const customStyles = {
        singleValue: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#8e9295' : '#8e9295',
        }),
        control: (provided) => ({
            ...provided,
            height: '30px',
            margin: 'auto 0',
            backgroundColor: '#1A2634',
            fontFamily: 'roboto',
            fontSize: '1.5rem',
            borderRadius: '27px',
            borderColor: '#1A2634',
            padding: '0 10px',
            width: '20vw',
            border: 'none',
            boxShadow: 'none',
            textAlign: 'left',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            '.myDropDown__dropdown-indicator': {
                color: '#21E18C',
                transition: 'transform 0.3s ease',
            },
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: '#21E18C',
            transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#21E18C' : '#1A2634',
            color: state.isSelected ? 'white' : '#8e97a3',
            '&:hover': {
                backgroundColor: state.isSelected ? '#21E18C' : '#8e97a3',
                color: state.isSelected ? 'white' : 'white',
            },
            fontSize: '1.4rem',
            textAlign: 'left',
        }),
        dropdownIndicator2: (provided) => ({
            ...provided,
            color: '#21E18C',
            transform: 'rotate(0deg)',
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
                ref={menuPortalTarget}
                styles={customStyles}
                className='movieDropDown'
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
