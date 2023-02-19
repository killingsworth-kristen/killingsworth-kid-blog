import './App.css';
import './assets/fonts/fonts.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import components
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
            <Navbar/>
        </header>
        <Routes>
          <Route path={'/'} element={<Home />} />
          {/*<Route path={'/blog'} element={< Blog />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/login'} element={<Login />} /> */}
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
