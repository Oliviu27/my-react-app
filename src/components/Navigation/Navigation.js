import React from 'react';
import styled from 'styled-components';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Menu from '../Menu/Menu';

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

function Navigation() {
    return (
        <NavigationContainer>
            <BurgerMenu />
            <Menu />
        </NavigationContainer>
        );
    }

export default Navigation;