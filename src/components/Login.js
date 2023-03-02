import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_OAUTH_ID;

export default function Login ({setLoggedIn, loggedIn, setAdmin}) {

    // login functions
    const onSuccess = (res) => {
        setLoggedIn(true)
        console.log("Login success! Current User: ", res.profileObj);
        if (res.profileObj.email === process.env.REACT_APP_ADMIN_EMAIL) {
            setAdmin(true);
        } else {
            setAdmin(false)
        }
    }

    const onFailure = (res) => {
        console.log("Login failed! res: ", res);
    }

    return (
        <div id='login-btn-container'>
            <GoogleLogin
                // id={"login-btn"}
                render={renderProps => (
                    <button className={loggedIn === false ? "google-btn" : "hidden google-btn"} onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
                  )}
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}