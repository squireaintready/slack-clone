import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth , provider} from './firebase'
import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider)
            .then((result) =>{
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((e)=>alert(e.message))        
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://s3-ap-southeast-2.amazonaws.com/newhope.net.au-contents/assets/2020/04/07122132/station-5.jpg' alt=''/>
                <h1>Sign in to SamJo's slack</h1>
                <p>SamJoSlack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
