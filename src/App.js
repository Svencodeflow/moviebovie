import './App.css';

import Header from "../src/components/Header";

import MovieDetails from './components/MovieDetails';

import { useState } from 'react';

//install -->import { Routes, Route } from 'react-router-dom';

// components
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';
// import Footer from '../src/components/Footer';
// import MovieDetails from '../src/components/MovieDetails';

// pages
//import Home from './pages/Home';


function App() {

    const [message, setMessage] = useState('')


    return (
        <div className="App">
            <h1>Appname</h1>

            <Header />


            <MovieDetails />

            {/* <Navbar /> */}
            {/* <h1>Appname</h1> */}
            <Navbar
                message={message}
                setMessage={setMessage}
            />
            {/* 
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>     
            */}
            <Footer/>
        </div>
    );
};

export default App;
