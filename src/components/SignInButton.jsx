import { useMsal } from '@azure/msal-react'
import { loginRequest } from '../authConfig'

const SignInButton = () => {
    const { instance } = useMsal()
    const handleLogin = (instance) => {
        instance.loginRedirect(loginRequest)
        .catch(e => console.error(e))
    }

    return (
        <button type="button" onClick={() => handleLogin(instance)}>Sign In</button>
    )
}

export default SignInButton;