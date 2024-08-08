import React from 'react'
import {Link} from 'react-router-dom'
import { signin } from '../Firebase/Authentication/Signin';
import {signinWithGoogle} from '../Firebase/Authentication/SigninWithGoogle'
export default function Login() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.elements.email.value;
        const password = event.target.elements.user_pass.value;

        if (!email.trim()) {
            alert('Please enter your Email');
            return;
        }
        if (!password.trim()) {
            alert('Please enter your password');
            return;
        }

        await signin(email,password)

        alert('Form submitted successfully!');
    };

    const handleGoogleSignin = async () => {
        await signinWithGoogle()
    }

    return (
        <>
            <div className='register-container'>
                <div className="container">
                    <div className="title">LOGIN</div>
                    <div className="content">
                        <form className="" method="post" onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your Email"
                                        required
                                        defaultValue=""
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input
                                        type="password"
                                        name="user_pass"
                                        placeholder="Enter your password"
                                        required=""
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <div>
                                <Link to={'/register'}>Register</Link>
                            </div>
                            <div className="button">
                                <button onClick={handleGoogleSignin}>Sign with Google</button>
                            </div>
                            <div className="button">
                                <input type="submit"></input>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
