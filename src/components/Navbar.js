import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script'
import './style/Navbar.css'

import Login from './Login';
import Logout from './Logout';

const clientId = process.env.oath_id;
export default function Navbar () {
    const navigate = useNavigate()
// if logged in !== true redirect from profile to login
// if logged in !== true hide logout button else hide login button
useEffect(()=>{
    function start() {
        gapi.client.init({
            clientId: clientId,
            scope: ""
        })
    };

    gapi.load('client:auth2', start);
  });

    return (
        <>
            <nav>
                <a onClick={()=> navigate('/')}>Home</a>
                <a onClick={()=> navigate('/poll')}>Poll</a>
                <a onClick={()=> navigate('/blog')}>Blog</a>
                <a onClick={()=> navigate('/profile')}>Profile</a>
                <Login/>
                <Logout/>
            </nav>
        </>

    )
}

