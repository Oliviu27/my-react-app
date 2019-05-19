import React from  'react';
import styled from 'styled-components';

const TestimonyContainer = styled.div`
    height: 235px;
    width: 190px;
    background: #f2eecb;
    border-radius: 3px;
    color: black;
    margin: 10px;
    font-size: 10px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`;

const Title = styled.h2`
    padding: 0 10px;
    min-height: 30px;
`;

const DescriptionWrapper = styled.div`
    padding: 0 10px;
    font-weight: 100;
    font-style: italic;
`;

const InfoWrapper = styled.div`
    padding: 0 10px;
    font-weight: 100;

    > p {
       margin: 0; 
    }
`;

const EmployeeName = styled.p`
    font-weight: 500;
`;

function Testimony(props){
    const {
        title,
        description,
        employeeName,
        company,
        jobTitle 
    } = props;

    return(
        <TestimonyContainer>
            <Title>{title}</Title>
            <DescriptionWrapper>
                <p>{description}}</p>
            </DescriptionWrapper>
            <InfoWrapper>
                <EmployeeName>{employeeName}</EmployeeName>
                <p>{company}</p>
                <p>{jobTitle}</p>
            </InfoWrapper>
        </TestimonyContainer>
    );
}

export default Testimony;