import React from 'react';
import styled from 'styled-components';
import PROJECTS_DATA from '../data/projects.data';
import { withRouter } from 'react-router-dom';

class ProjectDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: PROJECTS_DATA
        };
    }

    displayTools = (projectTools) => {
        let tools = "";
        for (let i = 0; i < projectTools.length; i++) {
            const tool = projectTools[i];
            tools = (i === 0) ? `${tool}` : `${tools}, ${tool}`;
        }
        return tools;
    }

    render() {
        const { id } = this.props.match.params;
        const projectId = Number.parseInt(id);
        console.log("id", typeof(id));
        console.log("this.state.projects", this.state.projects);
        const project = this.state.projects.find(p => p.id === projectId);
        console.log("project", project);
        return (
            <ProjectDetailContainer>
                <ProjectDescription>
                    <ProjectOverview>
                        <ProjectName>{project.name}</ProjectName>
                    
                        <SubTitle>Objective:</SubTitle>
                        <BriefDescription>{project.objective}</BriefDescription>

                        <SubTitle>Solution:</SubTitle>
                        <BriefDescription>{project.solution}</BriefDescription>
                    </ProjectOverview>
                    <ProjectInfo>
                        <InfoTitle>Project:</InfoTitle>
                        <BriefDescription>{project.projectType}</BriefDescription>

                        <InfoTitle>Team:</InfoTitle>
                        <BriefDescription>{project.team}</BriefDescription>

                        <InfoTitle>Tools:</InfoTitle>
                        <BriefDescription>
                            {this.displayTools(project.tools)}
                        </BriefDescription>
                    </ProjectInfo>
                </ProjectDescription>
                <ProjectName>{project.video1.videoTitle}</ProjectName>
                <VideoContainer>
                    <VideoFrame  
                        src={project.video1.videoURL} 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></VideoFrame>
                </VideoContainer> 
                <ButtonContainer>
                    <Button>
                        <a href={project.linkToProject} target="_blank">Link to live hosted project</a>
                    </Button>
                    <Button>
                        <a href={project.linktoRepo} target="_blank">Link to Github repo</a>
                    </Button>
                </ButtonContainer>
            </ProjectDetailContainer>
        );
    }
};

export default withRouter(ProjectDetail);

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

const ProjectName = styled.h1`
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

const ButtonContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 700px) {
        flex-direction: row;
    }
`;

const Button = styled.div` 
    border: 1px solid black;
    width: 300px;
    text-align: center;
    padding: 10px;
    margin: 10px;
`;