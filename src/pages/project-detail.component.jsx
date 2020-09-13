import React from 'react';
import styled from 'styled-components';

const ProjectDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-bottom: 80px;

    @media (min-width: 750px) {
        margin: 30px 0px;
        width: 700px;
        flex-direction: row;
    }
`;

const ProjectName = styled.h1`;
    color: #2c3e50;
`;


const ProjectOverview = styled.div`

`;

const ProjectInfo = styled.div`
    position: relative;

    @media (min-width: 750px) {
        top: 65px;
    }
`;

const SubTitle = styled.h2`
    color: #575757;
    font-size: 20px;
`;

const InfoTitle = styled.h3` 
    color: #575757;
    font-size: 18px;
`;

const BriefDescription = styled.p`
    color: #575757;
    font-size: 17px;
    font-family: 'Raleway', sans-serif;

    @media (min-width: 700px) {
        width: 400px;
        margin-right: 20px;
    }
`;

const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%;

    @media (min-width: 700px) {
        padding-top: 30%;
        width: 80%;
    }
`;

const VideoFrame = styled.iframe`
    position: absolute;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: none;
`;

const ButtonLink = styled.a`
    border: 1px solid #ccc;
    width: 300px;
`;

const ProjectDetail = () => {
    return (
        <ProjectDetailContainer>
            <ProjectDescription>
                <ProjectOverview>
                    <ProjectName>ProjectName</ProjectName>
                
                    <SubTitle>Objective</SubTitle>
                    <BriefDescription>If you try some other numbers for userId, you will notice that the information being shown never changes. This is because I have hardcoded the ID value that is being queried from the API in UserInfo</BriefDescription>

                    <SubTitle>Solution</SubTitle>
                    <BriefDescription>If you try some other numbers for userId, you will notice that the information being shown never changes. This is because I have hardcoded the ID value that is being queried from the API in UserInfo</BriefDescription>
                </ProjectOverview>
                <ProjectInfo>
                    <InfoTitle>Project:</InfoTitle>
                    <BriefDescription>Web Development Project</BriefDescription>

                    <InfoTitle>Team:</InfoTitle>
                    <BriefDescription>Senior Project Team of Four</BriefDescription>

                    <InfoTitle>Tools:</InfoTitle>
                    <BriefDescription>React, MongoDB, Node.js, Redux</BriefDescription>
                </ProjectInfo>
            </ProjectDescription>
            <VideoContainer>
                <VideoFrame  
                    src="https://www.youtube.com/embed/DSjeK3jG12o" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></VideoFrame>
            </VideoContainer> 
            <VideoContainer>
                <VideoFrame 
                    width="898" 
                    height="427" 
                    src="https://www.youtube.com/embed/FdfkqW6UNZA" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></VideoFrame>
            </VideoContainer>
            <div>
                <div>
                    <ButtonLink>link to live hosted project</ButtonLink>
                </div>
                <div>
                    <ButtonLink>link to github repo</ButtonLink>
                </div>
            </div>
        </ProjectDetailContainer>
    );
};

export default ProjectDetail;