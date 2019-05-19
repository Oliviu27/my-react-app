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
    width: 80%;
    text-align: center;
    font-weight: inherit;
    font-size: 28px;
    margin-top: 0px;
`;

const TestimoniesWrapper = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    justify-content: center;
    list-style: none;
    flex-wrap: wrap;
`;



function ContentBody(){
    return(
        <ContentBodyBackground  id="testimonyWrapper">
            <ContentHeader>Look at the testimonies about our experience</ContentHeader>
            <TestimoniesWrapper>
                {testimonyList.map(testimony => (
                    <Testimony{...testimony} />
                ))}
            </TestimoniesWrapper>
        </ContentBodyBackground>
    ); 
}

export default ContentBody;