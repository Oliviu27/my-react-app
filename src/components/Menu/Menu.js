import React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';
import { menuElements } from '../../data.js';
import uniqueId from 'react-html-id';

const MenuWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex: 1;
    margin-left: -10%;
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    width: 70%;
    height:20%;
    padding: 0;
`;

class Menu extends React.Component {
    constructor() {
    super();
    uniqueId.enableUniqueIds(this);
    }
        
    render () {
        return (
            <MenuWrapper>
                <MenuList> 
                    {menuElements.map(text => (
                        <Link text={text} key={this.nextUniqueId()} />
                        )
                    )}
                </MenuList>
            </MenuWrapper>
        );
    }
}

export default Menu;