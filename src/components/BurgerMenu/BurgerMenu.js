import React from 'react';
import styled from 'styled-components';

const BurgerMenuButton = styled.p`
    color: white;
    font-size: 30px;
    font-weight: 900;
    margin: 0px;
`;

const BurgerLine = styled.div`
    background-color: white;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    margin-bottom: 2px;
`;

function BurgerMenu() {
    return (
        <div>
            <BurgerMenuButton>M</BurgerMenuButton>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
        </div>
    );
}

export default BurgerMenu;