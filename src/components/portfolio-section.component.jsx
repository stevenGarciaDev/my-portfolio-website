import React from 'react';

import styled from 'styled-components';
import PortfolioPreview from './portfolio-preview.component';

import EasyMealPlannerImage from '../assets/EasyMealPlannerPic.png';
import BugTrackerImage from '../assets/BugTrackerPic2.png';
import SubredditImage from '../assets/SubredditTimer.png';
import BucketListImage from '../assets/PhuketListPreview.png';

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
            <PortfolioPreview id='1' name='EasyMealPlanners Web App' image={EasyMealPlannerImage} />
            <PortfolioPreview id='2' name='BugTracker Web App' image={BugTrackerImage} />
            <PortfolioPreview id='3' name='Subreddit Timer' image={SubredditImage} />
            <PortfolioPreview id='4' name='BucketList Web App' image={BucketListImage} />
        </GridContainer>
    );
}

export default PortfolioSection;