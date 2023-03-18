import React, { useEffect } from 'react';
import JWT_decode from 'jwt-decode'
import API from './../utils/API'
import { useNavigate } from 'react-router-dom';
import './style/Navbar.css'


export default function Navbar ({setAdmin, loggedIn, setLoggedIn, setToken, setUser}) {
    const navigate = useNavigate()

    // google login callback 
    const handleCallbackResponse = (response) => {
        let UserObj = JWT_decode(response.credential);
        API.postToken(response.credential)
        setUser(UserObj);
        setToken(response.credential);
        setLoggedIn(true)
        if (UserObj.email === "kristenk2017@gmail.com" || UserObj.email === "katiekillingsworth522@gmail.com") {
            setAdmin(true)
            localStorage.setItem("admin", true)
            console.log(`catching in navbar 23`)
        } else {
            setAdmin(false)
            localStorage.setItem("admin", false)
            console.log(`catching in navbar 27`)

        }
        localStorage.setItem("token", JSON.stringify(response.credential))
        localStorage.setItem("user", JSON.stringify(UserObj))
        localStorage.setItem("loggedIn", true)
        console.log(`catching in navbar 33`)
        window.location.reload()

    }

    // google login init
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "594289202000-pscqp621enkhgqd5cnlv36nosvthe37a.apps.googleusercontent.com",
            auto_selecct: true,
            callback: handleCallbackResponse,
            });
        
        google.accounts.id.renderButton(
            document.getElementById(`sign-in-div`),
            {shape: 'pill', theme: 'filled_white'}
        );

    },[])

    // google logout
    const handleLogout = (e) => {
        e.preventDefault();
        setUser({});
        localStorage.setItem("user", "");
        console.log(`catching in navbar 57`)
        setLoggedIn(false);
        localStorage.setItem("loggedIn", false);
        console.log(`catching in navbar 60`)
        setAdmin(false);
        localStorage.setItem("admin", false);
        console.log(`catching in navbar 63`)
        setToken("");
        localStorage.setItem('token', "");
        console.log(`catching in navbar 66`)
    }

    return (
        <>
            <nav>
                <button className="nav-button" onClick={()=> navigate('/')}>Home</button>
                <button className="nav-button" onClick={()=> navigate('/poll')}>Poll</button>
                <button className="nav-button" onClick={()=> navigate('/blog')}>Blog</button>
                <div className={loggedIn ? "google-btn hidden" : "google-btn"} id="sign-in-div"></div>
                <button className={loggedIn ? "logout-btn" : "logout-btn hidden"} onClick={handleLogout}>Logout</button>
            </nav>
        </>

    )
}

