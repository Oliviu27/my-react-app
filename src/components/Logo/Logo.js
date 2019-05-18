import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    text-align:center;
    width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    min-height: 200px;
`;

const LogoText = styled.p`
    font-size: 35px;
    font-weight: 100;
    font-family: amaranth;
`;

const LogoImg = styled.img`
    height: 50px;
    margin: 10px;
`;

function Logo(){
return(
    <LogoContainer>
        <LogoText>Discover</LogoText>
        <LogoImg src= {require("../../assets/Infinity_loop.png")}/>
        <LogoText>MUZIK</LogoText>
    </LogoContainer>
);
}

export default Logo;