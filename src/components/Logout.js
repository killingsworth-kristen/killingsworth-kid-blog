import { useState } from 'react';
import { GoogleLogout } from 'react-google-login'

const clientId = '594289202000-pscqp621enkhgqd5cnlv36nosvthe37a.apps.googleusercontent.com';
// const clientId = process.env.oath_id;

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