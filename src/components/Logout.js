import { useState } from 'react';
import { GoogleLogout } from 'react-google-login'

const clientId = process.env.REACT_APP_OAUTH_ID;

export default function Logout ({setLoggedIn, loggedIn}) {


    const onSuccess = () => {
        setLoggedIn(false)
        console.log("Log out successful!")
    }

    return (
        <div id='logout-btn-container'>
            <GoogleLogout
                // id={"logout-btn"}
                render={renderProps => (
                    <button className={loggedIn === true ? "google-btn" : "hidden google-btn"} onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                  )}
                clientId={clientId}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}