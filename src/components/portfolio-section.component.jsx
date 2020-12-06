import React from 'react';

import styled from 'styled-components';
import PortfolioPreview from './portfolio-preview.component';

import Image1 from '../assets/PhuketListPreview.png';

const GridContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    margin: 20px;

    @media (min-width: 700px) {
        margin: 50px;
    }
`;

const PortfolioSection = () => {
    return (
        <GridContainer>
            <PortfolioPreview id='1' name='BugTracker Web App' image={Image1} />
            <PortfolioPreview id='2' name='EasyMealPlanner Web App' image={Image1} />
            <PortfolioPreview id='3' name='Thomson Reuters Internship' image={Image1} />
            <PortfolioPreview id='4' name='BucketList Web App' image={Image1} />
        </GridContainer>
    );
}

export default PortfolioSection;