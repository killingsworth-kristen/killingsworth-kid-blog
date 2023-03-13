import React, { useEffect, useState } from 'react';
import JWT_decode from 'jwt-decode'
import API from './../utils/API'
import { useNavigate } from 'react-router-dom';
import './style/Navbar.css'


export default function Navbar ({admin, setAdmin, loggedIn, setLoggedIn, token, setToken, user, setUser}) {
    const navigate = useNavigate()

    // google login callback 
    const handleCallbackResponse = (response) => {
            API.postToken(response.credential);
            let UserObj = JWT_decode(response.credential);
            setUser(UserObj);
            setToken(response.credential);
            setLoggedIn(true)
            if (UserObj.email === "kristenk2017@gmail.com") {
                setAdmin(true)
                localStorage.setItem("admin", true)
            } else {
                setAdmin(false)
                localStorage.setItem("admin", false)
            }
            localStorage.setItem("token", JSON.stringify(response.credential))
            localStorage.setItem("user", JSON.stringify(UserObj))
            localStorage.setItem("loggedIn", true)
            window.location.reload()

    }

    // google login init
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_OAUTH_ID,
            auto_selecct: true,
            callback: handleCallbackResponse,
            });
        
        google.accounts.id.renderButton(
            document.getElementById(`sign-in-div`),
            {size: 'large', shape: 'pill'}
        );
    },[])

    // google logout
    const handleLogout = (e) => {
        e.preventDefault();
        setUser({});
        localStorage.setItem("user", "")
        setLoggedIn(false);
        localStorage.setItem("loggedIn", false)
        setAdmin(false);
        localStorage.setItem("admin", false)
        window.location.reload()
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
                {/* <div id="g_id_onload"
                    data-client_id={process.env.REACT_APP_OAUTH_ID}
                    data-auto_select="true"
                    data-login_uri="http://localhost:3000">
                </div>
                <button className="logout-btn g_id_signout">Logout</button> */}
            </nav>
        </>

    )
}

