import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import styled from 'styled-components';

const ParentHeader = styled.div`
  height: 40%;
  font-size: 12px;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  color: white;
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