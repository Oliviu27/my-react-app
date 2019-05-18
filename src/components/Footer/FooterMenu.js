import React from 'react';
import styled from 'styled-components';

const FooterMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;    
`;

const FooterList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const FooterListTitle = styled.p`
    margin: 0 0 2px;
    font-weight: 500;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 5px;
`;

function FooterMenu(props){
const {title, links, socialLinks} = props;

 return (
     <FooterMenuWrapper>
        <FooterListTitle>{title}</FooterListTitle>
        <FooterList>
            { links && !!links.length && links.map(link => (
                <li>{link}</li>
            ))}

            { socialLinks && !!socialLinks.length && socialLinks.map(link => (
                <Icon src={require(`../../assets/${link}.svg`)} alt= {link} />
            ))}
        </FooterList>
     </FooterMenuWrapper>
     
 );
}

export default FooterMenu;