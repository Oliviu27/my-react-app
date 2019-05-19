import React from 'react';
import styled from 'styled-components';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Link from '../Link/Link';
import { burgerMenuLinks } from '../../data';

const DropDownMenu = styled.div`
    color: white;
    height: auto;
    width: auto;
    position: absolute;
    display: ${prop => prop.isVisible ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
`;

const MenuLinksList = styled.ul`
    list-style: none;
    padding: 0; 
    display: flex;
    flex-direction: column;
    margin: 0;
`;

const BurgerMenuWrapper = styled.div`
    margin-left: 10%;
    z-index: 99;
`;

class BurgerWrapper extends React.Component {

    constructor() {
        super();
        this.state = {
            menuIsVisible: false,
        }
        this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        const { menuIsVisible } = this.state;
        if(menuIsVisible && !this.node.contains(event.target))
        {
            this.toggleDropDownMenu();
        }
    }

    toggleDropDownMenu() {
        const { menuIsVisible } = this.state;
        this.setState({ menuIsVisible: !menuIsVisible });
    }

    render() {
        const { menuIsVisible } = this.state;
        return (
            <BurgerMenuWrapper ref = {node => {this.node = node}}>
                <BurgerMenu onClick={this.toggleDropDownMenu} menuDisplayed={menuIsVisible} />
                <DropDownMenu isVisible = { menuIsVisible }>
                    <MenuLinksList>
                        {burgerMenuLinks.map(text =>
                            <Link text={text} />
                        )}
                    </MenuLinksList>
                </DropDownMenu>
            </BurgerMenuWrapper>
        )
    }

}
export default BurgerWrapper;