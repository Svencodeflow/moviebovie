import './App.css';
import Home from './pages/Home';

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
            </Routes>

        </div>
    );
};

export default App;
