import React from 'react';
import styled from 'styled-components';

const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    width: 80%;
    height:20%;
`;


class Menu extends React.Component {
    render() {
        const menuElements = ['PRODUCT','ABOUT','PORTFOLIO','TEAM','CONTACT'];
        return (
            <MenuList> 
                {menuElements.map(text => (
                        <li>{text}</li>
                    )
                )}
            </MenuList>
        );
    }
}

export default Menu;