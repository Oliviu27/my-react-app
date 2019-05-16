import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    text-align:center;
    height:80%;
    width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const LogoText = styled.p`
    font-size: 35px;
    font-weight: 100;
    font-family: amaranth;
`;

function Logo(){
return(
    <LogoContainer>
        <LogoText>Discover.</LogoText>
        <LogoText>MUZIK.</LogoText>
    </LogoContainer>
);
}

export default Logo;