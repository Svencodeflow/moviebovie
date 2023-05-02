import './App.css';
import Home from './pages/Home';
import MovieDetails from './components/MovieDetails';

//install -->
import { Routes, Route } from 'react-router-dom';

// components
// import Footer from '../src/components/Footer';
// import MovieDetails from '../src/components/MovieDetails';

// pages
//import Home from './pages/Home';


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
