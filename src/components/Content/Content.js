import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  height: 50%;
  background: aliceblue;
`;

function Content() {
    return (
    <ContentContainer>
      <p>Content</p>
    </ContentContainer>
    );
}

export default Content;