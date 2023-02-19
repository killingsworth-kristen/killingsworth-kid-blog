import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Navbar.css'


export default function Navbar () {
    const navigate = useNavigate()
// if logged in !== true redirect from profile to login
// if logged in !== true hide logout button else hide login button


    return (
        <>
            <nav>
                <a onClick={()=> navigate('/')}>Home</a>
                <a onClick={()=> navigate('/poll')}>Poll</a>
                <a onClick={()=> navigate('/blog')}>Blog</a>
                <a onClick={()=> navigate('/profile')}>Profile</a>
                <a onClick={()=> navigate('/login')}>Login</a>
                <a className='hidden' onClick={()=> navigate('/logout')}>Logout</a>
            </nav>
        </>

    )
}

