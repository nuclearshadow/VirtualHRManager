import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/Header.css'

export default function Header() {
    return (
        <>
            <header class="site-header">
                <div class="site-identity">
                    <h1><a href="#">Virtual HR Manager</a></h1>
                </div>
                <nav class="site-navigation">
                    <ul class="nav">
                        <li><a href="#">About</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><Link to="/register" className='signup-button'>Signup/Login</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
