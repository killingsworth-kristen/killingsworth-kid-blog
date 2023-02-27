import { GoogleLogin } from 'react-google-login'

const clientId = '594289202000-pscqp621enkhgqd5cnlv36nosvthe37a.apps.googleusercontent.com';

export default function Login () {
    const onSuccess = (res) => {
        console.log("Login success! Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login failed! res: ", res);
    }
    return (
        <div id='login-btn-container'>
            <GoogleLogin
                // id={"login-btn"}
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}