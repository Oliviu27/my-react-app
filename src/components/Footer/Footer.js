import React from 'react';
import styled from 'styled-components';
import FooterMenu from './FooterMenu';
import {footerMenuLists} from '../../data'

const FooterContainer = styled.div`
display: flex;
justify-content: center;
width: 80%;
height: auto;
color: black;
font-size: 12px;
font-weight: 100;
padding: 30px 0;
justify-content: space-evenly;

  > p {
    margin:0px;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 75%;
`;

const FooterLogo = styled.div`
  font-weight: 900;
  font-family: amaranth;
  font-size: 15px;
  width: 25%;
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`;

function Footer(){
return (
  <FooterWrapper>
    <FooterContainer>
      <FooterLogo>
        <p>Discover</p>
        <LogoImg src= {require("../../assets/Infinity_loop.png")}/>
        <p>MUZIC</p>
      </FooterLogo>
      <MenuContainer>
        {footerMenuLists.map(menu => (
          <FooterMenu title={menu.menuTitle} links={menu.titleLinks} socialLinks={menu.socialMediaLinks}/>
        ))}
      </MenuContainer>
    </FooterContainer>
  </FooterWrapper>
);
}

export default Footer;