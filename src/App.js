import './App.css';
import './assets/fonts/fonts.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react';
import API from './utils/API.js'

// import components
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Poll from './components/pages/Poll';
import Blog from './components/pages/Blog';
import Footer from './components/Footer';
import NewPost from './components/NewPost'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [postMode, setPostMode] = useState('Create');
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.user)
    if (storedUser.email === "kristenk2017@gmail.com") {
      setUser(storedUser)
      setAdmin(localStorage.setItem("admin", true))
      setLoggedIn(localStorage.loggedIn)
      setToken(localStorage.token)
    }
    if (storedUser) {
      setUser(storedUser)
      setAdmin(localStorage.admin)
      setLoggedIn(localStorage.loggedIn)
      setToken(localStorage.token)
    } else {
      return;
    }
  },[])

  const handleNewPost = () => {
    setPostMode('Create');
    setOpenModal(true);
  }

  const handleEditPost = () => {
    setPostMode("Edit");
    setOpenModal(true);
  }

  return (
    <div className="App">
      <Router>
        <header>
            <Navbar admin={admin} setAdmin={setAdmin} loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} token={token} setToken={setToken}/>
        </header>
        <NewPost postMode={postMode} setPostMode={setPostMode} openModal={openModal} setOpenModal={setOpenModal}/>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/poll'} element={<Poll />} />
          <Route path={'/blog'} element={<Blog 
            admin={admin} 
            setAdmin={setAdmin} 
            handleEditPost={handleEditPost} 
            handleNewPost={handleNewPost}/>} />
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
