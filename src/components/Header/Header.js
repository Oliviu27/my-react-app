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

const HeaderContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


function Header() {
    return (
        <ParentHeader>
            <Navigation/>
            <HeaderContentWrapper>
                <Logo />
                <ContentBanner/>
            </HeaderContentWrapper>
        </ParentHeader>
    );
}

export default Header;