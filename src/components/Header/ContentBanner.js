import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    min-height: 25%;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    flex-direction: column;
    width: 80%;
`;

const BannerText = styled.span`
    color: white;
    font-size: 12px;
    text-align: center;
    font-weight: 100;
`;

const ToggableBannerText = styled(BannerText)`
    display: ${props => props.bannerIsVisible ? 'block' : 'none'};
    margin-bottom: 12px;
`;

const BannerButton = styled.button`
    color: #ffffffe8;
    border: 1.2px solid #ffffffba;
    font-size: 10px;
    height: 20px;
    text-align: center;
    width: 85px;
    padding: 0;
    background: transparent;
    border-radius: 5px;
    text-align: center;
    font-family: Arial Narrow;
    margin: 10px;

    :hover{
        color: white;
        border: 1.2px solid white;
    }
`;

class ContentBanner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerIsVisible:false
        }
        this.toggleBanner = this.toggleBanner.bind(this);
    }

    toggleBanner() {
        const {bannerIsVisible} = this.state;
        this.setState({bannerIsVisible: !bannerIsVisible});
    }

    render() {
        const { bannerIsVisible } = this.state;
        return (
            <Banner>
                <BannerText>It is a long established fact that a reader will be distracted by the readable content of a page when looking</BannerText>
                <BannerButton onClick={this.toggleBanner}>{bannerIsVisible ? 'ENCOVER' : 'DISCOVER'}</BannerButton>
                <ToggableBannerText bannerIsVisible={bannerIsVisible}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</ToggableBannerText>
            </Banner>
        );
    }
}

export default ContentBanner;