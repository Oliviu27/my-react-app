import React from 'react';
import styled from 'styled-components';

const BurgerButton = styled.button`
    display: flex;
    flex-direction: column;
    background: transparent;
    border-style: none;
    padding: 0;

    :focus {
        outline: none;
    }

    :hover {
        cursor: pointer;
    }
`;

const BurgerMenuText = styled.p`
    color: white;
    font-size: 45px;
    font-weight: 900;
    margin: 0px;
`;

const BurgerArrow = styled.img`
    width: 45px;
    height: 30px;
    margin-top: -6px;
`;

function BurgerMenu(props) {
    const { onClick, menuDisplayed } = props;
    return (
        <BurgerButton onClick = { onClick } >
            <BurgerMenuText>M</BurgerMenuText>
            <BurgerArrow src={require(`../../assets/${menuDisplayed?'up':'down'}.png`)}/>
        </BurgerButton>
    );
}

export default BurgerMenu;