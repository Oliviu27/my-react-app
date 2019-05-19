import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import BurgerWrapper from './BurgerWrapper';

const NavigationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`;


function Navigation() {
    return (
        <NavigationContainer>
            <BurgerWrapper />
            <Menu />
        </NavigationContainer>
        );
    }

export default Navigation;