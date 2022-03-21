import React from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="container">
            <div className="navbar-brand">GitHub Search</div>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <NavLink to="/" className="nav-link">
                        Головна
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/about" className="nav-link">
                        Інформація
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar
