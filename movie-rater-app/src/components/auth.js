import React,{ useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import API from '../api-service'

function Auth(props){

    const changeBackground = (e) => {
        e.target.style.cursor = 'pointer';
        e.target.style.color = 'blue';
    }
    
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isLoginView,setIsLoginView] = useState(true)

    const [token,setToken] = useCookies(['mrtoken'])
    
    useEffect( () => {
        console.log(token)
        if(token['mrtoken']) window.location.href = '/movies'
    },[token])

    const loginClicked = () => {
        // console.log({username, password})
        API.loginUser({username, password})
        // .then(resp => console.log(resp))
        .then(resp => setToken('mrtoken',resp.token))
        .catch(error => console.log(error))
    }

    const registerClicked = () => {
        // console.log({username, password})
        API.registerUser({username, password})
        .then(resp => setToken('mrtoken',resp.auth_token))
        // .then(() => loginClicked())
        .catch(error => console.log(error))
    }
    
    const isDisabled = username.length === 0 || password.length === 0

    return (
        <div className="App">
            <div className="App-header">
                {isLoginView ? <h2>Login Page</h2> : <h2>Register Page</h2>}
            </div>
            <div className='login-container'>
                <label htmlFor="username">Username</label><br/>
                <input id="username" type="text" placeholder="username"
                    onChange={evt => setUsername(evt.target.value)}></input><br/>
                <label htmlFor="password">Password</label><br/>
                <input id="password" type="password" placeholder="password"
                    onChange={evt => setPassword(evt.target.value)}></input><br/>
                {isLoginView ?
                    <button onClick={loginClicked} disabled={isDisabled}>Login</button> :
                    <button onClick={registerClicked} disabled={isDisabled}>Register</button>
                }
                {isLoginView ? 
                <p onMouseOver={changeBackground} onClick={() => setIsLoginView(false)}>Don't have an account? Register</p> : 
                <p onMouseOver={changeBackground} onClick={() => setIsLoginView(true)}>Already have an account? Login</p>}
            </div>
        </div>
    )
}
export default Auth;