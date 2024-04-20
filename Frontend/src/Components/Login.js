import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.elements.first_name.value;
        const password = event.target.elements.user_pass.value;

        if (!username.trim()) {
            alert('Please enter your username');
            return;
        }
        if (!password.trim()) {
            alert('Please enter your password');
            return;
        }
        alert('Form submitted successfully!');
    };

    return (
        <>
            <div className='register-container'>
                <div className="container">
                    <div className="title">LOGIN</div>
                    <div className="content">
                        <form className="" method="post" onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="Enter your firstname"
                                        required=""
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
                                <input type="submit"></input>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
