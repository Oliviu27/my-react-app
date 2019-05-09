import React from 'react';
import Burger from '../Burger/Burger';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';



function Header() {
    return (
        <div className="header">
            <Navigation />
            <Burger />
            <Logo />
        </div>
    );
}

export default Header;