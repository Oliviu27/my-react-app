import React from 'react';
import styled from 'styled-components';

const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    width: 60%;
    height:20%;
`;

const MenuLink = styled.li`
    font-weight: 100;
    color: #ffffffb5;

    :hover {
        color:white;
        border-bottom: 0.5px solid #ffffffb3;
        transition: .3s;
      }
`;


class Menu extends React.Component {
    render() {
        const menuElements = ['Discover','Suggestions','Points','Connected','Updates'];
        return (
            <MenuList> 
                {menuElements.map(text => (
                        <MenuLink>{text}</MenuLink>
                    )
                )}
            </MenuList>
        );
    }
}

export default Menu;