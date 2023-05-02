// components
import MovieDetails from './components/MovieDetails';

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
            </Routes>
        </div>
    );
};

export default App;
