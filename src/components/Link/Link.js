import React from 'react';
import styled from 'styled-components';
import { scrollToElement } from '../../helpers';

const MenuLink = styled.li`
    font-weight: 100;
    color: #ffffffb5;
    transition: .1s;
    margin-bottom: 5px;
    cursor: pointer;

    :hover {
        text-decoration: underline;
      }
`;

const LinkButton = styled.button`
    background: transparent;
    border-style: none;
    border: none;
    padding: 0;
    margin: 0;
    text-align: left;
    font-size: inherit;
    font-family: inherit;

    :focus {
        outline: none;
    }
`;

class Link extends React.Component {
    
    onClickScroll(text) {
        const testimoniesWrapper = document.getElementById('testimonyWrapper');
        const footerWrapper = document.getElementById('footer');

        if (text === 'Testimonies') {
            scrollToElement(testimoniesWrapper);
        }
        else if (text === 'Footer') {
            scrollToElement(footerWrapper);
        }
    }

    render() {
        const { text } = this.props;
        return (
            <LinkButton onClick={() => this.onClickScroll(text)}>
                <MenuLink>{text}</MenuLink>
            </LinkButton>
        )
    }
}

export default Link;    