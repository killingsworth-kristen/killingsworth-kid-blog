import { GoogleLogin } from 'react-google-login';

const clientId = '594289202000-pscqp621enkhgqd5cnlv36nosvthe37a.apps.googleusercontent.com';
// const clientId = process.env.oath_id;

export default function Login ({setLoggedIn, loggedIn, setAdmin}) {

    // login functions
    const onSuccess = (res) => {
        setLoggedIn(true)
        console.log("Login success! Current User: ", res.profileObj);
        if (res.profileObj.email === "kristenk2017@gmail.com") {
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