import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    text-align:center;
    height:80%;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const LogoText = styled.p`
    font-size: 35px;
    font-weight: 100;
`;

function Logo(){
return(
    <LogoContainer>
        <LogoText>Discover.</LogoText>
        <LogoText>MUZIK.</LogoText>

     {/* <img src='../../.././assets/infinity_loop.png' /> */}
        {/* <img src="C:\Users\Oliviu\my-react-app\assets\Infinity_loop.png" /> */}
    </LogoContainer>
);
}

export default Logo;