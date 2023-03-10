import React, { useEffect, useState } from 'react';
import JWT_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import './style/Navbar.css'


export default function Navbar ({admin, setAdmin, loggedIn, setLoggedIn}) {
    const navigate = useNavigate()
// if logged in !== true redirect from profile to login
// if logged in !== true hide logout button else hide login button
    // state
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");

    // google login callback 
    const handleCallbackResponse = (response) => {
        console.log("JWT token: " + response.credential);
        let UserObj = JWT_decode(response.credential);
        console.log(UserObj);
        setUser(UserObj);
        setLoggedIn(true)
        setToken(response);
        if (UserObj.email === "kristenk2017@gmail.com") {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }


    // google login init
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_OAUTH_ID,
            callback: handleCallbackResponse,
            });
        
        google.accounts.id.renderButton(
            document.getElementById(`sign-in-div`),
            {size: 'large', shape: 'pill'}
        );

    },[loggedIn])

    // google logout
    const handleLogout = (e) => {
    e.preventDefault();
    setUser({});
    setLoggedIn(false);
    setAdmin(false);
    }

    return (
        <>
            <nav>
                <a onClick={()=> navigate('/')}>Home</a>
                <a onClick={()=> navigate('/poll')}>Poll</a>
                <a onClick={()=> navigate('/blog')}>Blog</a>
                {/* <a onClick={()=> navigate('/profile')}>Profile</a> */}
                <div className={loggedIn ? "google-btn hidden" : "google-btn"} id="sign-in-div"></div>
                <button className={loggedIn ? "logout-btn" : "logout-btn hidden"} onClick={handleLogout}>Logout</button>
            </nav>
        </>

    )
}

