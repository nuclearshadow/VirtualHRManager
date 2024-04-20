import React from 'react'
import {Link} from 'react-router-dom';
import '../Components/Register.css'
export default function Register() {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Validation logic
        const firstName = event.target.first_name.value.trim();
        const lastName = event.target.last_name.value.trim();
        const email = event.target.email.value.trim();
        const password = event.target.user_pass.value.trim();
        const confirmPassword = event.target.confirm_pass.value.trim();
        const city = event.target.city.value;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !city) {
            alert("All fields are required");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        alert("Form submitted successfully!");
    };

    return (
        <>
            {/* <h1>Hello</h1> */}
            <div className='register-container'>
            <div className="container">
                <div className="title">Registration</div>
                <div className="content">
                    <form className="" method="post" onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">First Name</span>
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="Enter your firstname"
                                    required=""
                                    defaultValue=""
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Last Name</span>
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Enter your lastname"
                                    required=""
                                    defaultValue=""
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
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
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input
                                    type="password"
                                    name="confirm_pass"
                                    placeholder="Confirm your password"
                                    required=""
                                    defaultValue=""
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">City</span>
                                <select id="city" name="city" placeholder="City" className="input">
                                    <option value="">Select City</option>
                                    <option value="Abrama">Abrama</option>
                                    <option value="Adalaj">Adalaj</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Ahwa">Ahwa</option>
                                </select>
                            </div>
                        </div>
                        <div>
                        <Link to={'/login'}>Login</Link>
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
