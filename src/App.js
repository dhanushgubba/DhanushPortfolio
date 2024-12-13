import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/achievements' element={<Achievements />}/>
      </Routes>
    </>
  );
};
const Main = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Main;
