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
    font-size: 18px;
    text-align: center;
    font-weight: 100;
`;

const ToggableBannerText = styled(BannerText)`
    display: ${props => props.bannerIsVisible ? 'block' : 'none'};
    margin-bottom: 15px;
`;

const BannerButton = styled.button`
    color: #ffffffe8;
    border: 1.2px solid #ffffffba;
    font-size: 16px;
    text-align: center;
    padding: 10px;
    background: transparent;
    border-radius: 5px;
    text-align: center;
    font-family: Arial Narrow;
    margin: 15px;

    :hover {
        color: white;
        border: 1.2px solid white;
        cursor: pointer;
    }
    
    :focus {
        outline: none;
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
                <BannerText>It is a long established fact that a reader will be distracted by the readable content of a page when looking at pretty design.</BannerText>
                <BannerButton onClick={this.toggleBanner}>{bannerIsVisible ? 'ENCOVER' : 'DISCOVER'}</BannerButton>
                <ToggableBannerText bannerIsVisible={bannerIsVisible}>Quisque cursus aliquam mi lacinia gravida. Integer ut posuere turpis, et maximus neque. Sed odio lectus, bibendum vel felis aliquam, maximus tincidunt augue. Proin facilisis viverra elit vitae pulvinar. Pellentesque vitae aliquet tellus. Duis eu pretium nunc, nec mollis erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam a maximus erat.</ToggableBannerText>
            </Banner>
        );
    }
}

export default ContentBanner;