import React from 'react'
import { NavLink, Link } from 'react-router-dom';

function Header() {
    return (
        <div className="">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand text-uppercase heading" to="/">React Solution</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink exact activeStyle={{ color: 'rgb(100, 150, 250)', borderBottom: '2px solid rgb(100, 150, 250)' }} className="nav-link" to='/' aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeStyle={{ color: 'rgb(100, 150, 250)', borderBottom: '2px solid rgb(100, 150, 250)' }} className="nav-link" to='/services' aria-current="page">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeStyle={{ color: 'rgb(100, 150, 250)', borderBottom: '2px solid rgb(100, 150, 250)' }} className="nav-link" to='/about' aria-current="page">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeStyle={{ color: 'rgb(100, 150, 250)', borderBottom: '2px solid rgb(100, 150, 250)' }} className="nav-link" to='/contact' aria-current="page">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
