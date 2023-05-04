// components
import MovieDetails from './components/MovieDetails';
import SavedMovies from './components/SavedMovies';

// pages
import Home from './pages/Home';

// react
import { Routes, Route } from 'react-router-dom';
import './App.css';



function App() {

    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/moviedetails/:id" element={<MovieDetails />} />
                <Route path="/savedmovies" element={<SavedMovies />} />
            </Routes>
        </div>
    );
};

export default App;
