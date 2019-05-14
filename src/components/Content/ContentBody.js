import React from 'react';
import styled from 'styled-components';
import Testimony from '../Testimony/Testimony';
import { testimonyList } from '../../data';

const ContentBodyBackground = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    text-align: center;
    background: white;
    color: black;
    padding: 20px 0px 20px 0px;
`;

const ContentHeader = styled.p`
    width: 60%;
    text-align: center;
    font-weight: inherit;
    font-size: 20px;
`;

const TestimoniesWrapper = styled.div`
    max-width: 90%;
    height: auto;
    min-width: 80%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    flex-wrap: wrap;
`;



function ContentBody(){
    return(
        <ContentBodyBackground>
            <ContentHeader>Look at what our clients had to say about our experience</ContentHeader>
            <TestimoniesWrapper>
                {testimonyList.map(testimony => (
                    <Testimony
                        {...testimony}
                    />
                ))}
            </TestimoniesWrapper>
        </ContentBodyBackground>
    ); 
}

export default ContentBody;