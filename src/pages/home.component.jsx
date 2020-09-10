import React from 'react';

import styled from 'styled-components';
import PortfolioSection from '../components/portfolio-section.component';

import Image from '../assets/stevenPicCircle.png';

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    @media (min-width: 820px) {
        flex-direction: row;
        justify-content: center;
    }
`;

const Photo = styled.img`
    width: 163px;
    height: 152px;
    
    @media (min-width: 700px) {
        margin-right: 20px;
    }
`;

const Description = styled.p`
    color: #575757;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    margin: 20px;

    @media (min-width: 700px) {
        margin: 70px auto;
        width: 600px;
    }
`;

const Home = () => (
    <div>
        <Header>
            <div>
                <Photo src={Image} />
            </div>
            <div>
                <Description>
                    I'm Steven Garcia, a Software Developer and Computer Science 
                    graduate of Cal State Long Beach. 
                    Most recently I was a Software Developer Intern at Thomson Reuters 
                    where I implemented front-end features for their UI. Below 
                    are my projects which display my skill-set for front-end and back-end web development.
                </Description>
            </div>
        </Header>
        <PortfolioSection />
    </div>
);

export default Home;