import React from 'react';
import styled from 'styled-components';

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

function Link(props) {
const { text } = props;
    return (
        <MenuLink>{text}</MenuLink>
    )
}

export default Link;    