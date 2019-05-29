import React from 'react';
import styled from 'styled-components';
import uniqueId from 'react-html-id';

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
    width: 27px;
    margin-right: 5px;
`;

class FooterMenu extends React.Component {

constructor () {
    super();
    uniqueId.enableUniqueIds(this);
}

render () {
    return (
        <FooterMenuWrapper>
           <FooterListTitle>{this.props.title}</FooterListTitle>
           <FooterList>
               { this.props.links && !!this.props.links.length && this.props.links.map(link => (
                   <li key={this.nextUniqueId()}>{link}</li>
               ))}
   
               { this.props.socialLinks && !!this.props.socialLinks.length && this.props.socialLinks.map(link => (
                   <Icon src={require(`../../assets/${link}.svg`)} alt= {link} key={this.nextUniqueId()}/>
               ))}
           </FooterList>
        </FooterMenuWrapper>
        
    );
} }

export default FooterMenu;