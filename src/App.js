import './App.css';
import './assets/fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

// import components
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Poll from './components/pages/Poll';
import Blog from './components/pages/Blog';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';

function App() {
  const ADMIN_1 = process.env.REACT_APP_ADMIN_1;
  const ADMIN_2 = process.env.REACT_APP_ADMIN_2;

  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [postMode, setPostMode] = useState('Create');
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(()=>{
    let storedUser;
    if (localStorage.getItem('user') === "" ) {
      storedUser = localStorage.getItem('user')
      
    } else {
      storedUser = JSON.parse(localStorage.getItem('user'))
    }
    
    if (storedUser === null) {
      return;
    } else if (storedUser.email === ADMIN_1 || ADMIN_2) {
      setUser(storedUser)
      localStorage.setItem("admin", true)
      setAdmin(true)
      localStorage.setItem("loggedIn", true)
      setLoggedIn(true)
      setToken(localStorage.token)
    } else if (storedUser) {
      setUser(storedUser)
      localStorage.setItem("admin", false)
      setAdmin(false)
      localStorage.setItem("loggedIn", true)
      setLoggedIn(true)
      setToken(localStorage.token)
    } else {
      return;
    }
  },[])

  const handleNewPost = () => {
    setPostMode('add');
    setOpenModal(true);
  }

  return (
    <div className="App">
      <Router>
        <header>
            <Navbar admin={admin} setAdmin={setAdmin} loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} token={token} setToken={setToken}/>
        </header>
        <NewPost openModal={openModal} setOpenModal={setOpenModal}/>
        <EditPost postMode={postMode} setPostMode={setPostMode} user={user}/>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/poll'} element={<Poll />} />
          <Route path={'/blog'} element={<Blog 
            admin={admin} 
            setAdmin={setAdmin} 
            handleNewPost={handleNewPost}
            setPostMode={setPostMode}
            postMode={postMode}
            loggedIn={loggedIn}
            user={user}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
