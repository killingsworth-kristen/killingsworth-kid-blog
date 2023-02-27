import './App.css';
import './assets/fonts/fonts.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';

// import components
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Poll from './components/pages/Poll';
import Blog from './components/pages/Blog';
import Footer from './components/Footer';

function App() {
  const [admin, setAdmin] = useState(false)

  return (
    <div className="App">
      <Router>
        <header>
            <Navbar admin={admin} setAdmin={setAdmin}/>
        </header>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/poll'} element={<Poll />} />
          <Route path={'/blog'} element={< Blog admin={admin} setAdmin={setAdmin}/>} />
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
