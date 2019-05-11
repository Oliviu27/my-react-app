import React from 'react';
import styled from 'styled-components';

const BurgerMenuButton = styled.p`
    color: white;
    font-size: 30px;
    font-weight: 900;
`;

const BurgerLine = styled.span`
    color:white;
`;

function BurgerMenu() {
    return (
        <BurgerMenuButton>M</BurgerMenuButton>
        <BurgerLine>asd</BurgerLine>
    );
}

export default BurgerMenu;