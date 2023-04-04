import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/friends">Friend</ActiveLink>
            <ActiveLink to="/services">Services</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
        </nav>
    );
};

export default Header;