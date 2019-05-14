import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ContentBanner from './ContentBanner';
import styled from 'styled-components';

const ParentHeader = styled.div`
  height: 40%;
  font-size: 12px;
  color: white;
`;


function Header() {
    return (
        <ParentHeader>
            <Navigation/>
            <Logo />
            <ContentBanner/>
        </ParentHeader>
    );
}

export default Header;