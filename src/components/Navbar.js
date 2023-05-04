// import { useState, useEffect } from 'react';
import '../css/Navbar.css';
// import Lupe from '../images/lupe.png';
import logo from '../images/MOV.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'


const Navbar = (props) => {

    const handleMessage = (eventMessage) => {
        props.setMessage(eventMessage.target.value)
    }


    return (
        <nav className='navbar' >
            <div className='logo_movie' >
                <Link to='/'>
                    <img src={logo} alt='logo' /></Link>
            </div>
            <div className='input_field' >
                <input type={props.message} onChange={handleMessage} placeholder='Search something here' />
            </div>
            <div className='fav_button' >
                <Link to='/savedmovies'>
                    <Button variant="outlined">Favorite</Button></Link>
            </div>
        </nav >
    );
}

export default Navbar;