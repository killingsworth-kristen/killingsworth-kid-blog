import { GoogleLogout } from 'react-google-login'

const clientId = '594289202000-pscqp621enkhgqd5cnlv36nosvthe37a.apps.googleusercontent.com';

export default function Logout () {
    const onSuccess = () => {
        console.log("Log out successful!")
    }

    return (
        <div id='logout-btn-container'>
            <GoogleLogout
                // id={"logout-btn"}
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}