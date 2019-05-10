import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import styled from 'styled-components';

const ParentHeader = styled.div`
  height: 40%;
  font-size: 12px;
  background: brown;
`;


function Header() {
    return (
        <ParentHeader>
            <Navigation/>
            <Logo />
        </ParentHeader>
    );
}

export default Header;