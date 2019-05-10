import React from 'react';
import styled from 'styled-components';

const BurgerMenuButton = styled.button`
    height: 30px;
    width: 60px;
    background-color: orange;
`;

function BurgerMenu() {
    return (
        <BurgerMenuButton>Menu</BurgerMenuButton>
    );
}

export default BurgerMenu;