import React from 'react';

import styled from 'styled-components';
import PortfolioSection from '../components/portfolio-section.component';

import Image from '../assets/stevenPicCircle.png';
import AboutMeImage from '../assets/aboutMePic.jpg';

const Home = ({ isNavOpen }) => (
    <Container isNavOpen={isNavOpen}>
        <Header>
            <div>
                <Photo src={Image} />
            </div>
            <div>
                <Description>
                    I'm Steven Garcia, a Software Engineer and Computer Science 
                    graduate of Cal State Long Beach. Currently I'm an Engineer at Toshiba America Business Solutions
                    where I work in Angular, TypeScript, C#, and .NET. Below 
                    are my projects which display my skill-set for front-end and back-end web development.
                </Description>
            </div>
        </Header>
        <PortfolioSection />
        <Photo src={AboutMeImage} style={{display: "none" }} /> 
    </Container>
);

const Container = styled.div`
    margin-top: ${props => props.isNavOpen ? '140px' : '0px'};

    @media (min-width: 700px) {
        margin-top: 0px;
    }
`;

const Header = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media (min-width: 820px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const Photo = styled.img`
    height: 152px;
    width: 163px;
    
    @media (min-width: 700px) {
        margin-right: 20px;
    }
`;

const Description = styled.p`
    color: #575757;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 1.5;
    margin: 20px;

    @media (min-width: 700px) {
        margin: 70px auto;
        width: 600px;
    }
`;

export default Home;