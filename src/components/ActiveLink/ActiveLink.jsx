import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            children={children}
            className={({ isActive }) => isActive ? "active" : ""
            }
        >
        </NavLink>
    );
};

export default ActiveLink;