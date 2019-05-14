import React from 'react';
import styled from 'styled-components';
import ContentBody from './ContentBody';

const ContentContainer = styled.div`
    min-height: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function Content() {
    return (
    <ContentContainer>
      <ContentBody/>
    </ContentContainer>
    );
}

export default Content;