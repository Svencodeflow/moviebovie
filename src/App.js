import './App.css';
import Header from "../src/components/Header";
//install -->import { Routes, Route } from 'react-router-dom';

// components
//import NavBar from './components/NavBar';

// pages
//import Home from './pages/Home';


function App() {
    return (
        <div className="App">
            <h1>Appname</h1>
            <Header />
            {/* <Navbar /> */}
            {/* 
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>     
            */}
        </div>
    );
};

export default App;
