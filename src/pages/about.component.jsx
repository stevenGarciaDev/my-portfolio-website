import React from 'react';
import styled from 'styled-components';

import AboutMeImage from '../assets/aboutMePic.jpg';
import Skill from '../components/skill.component';

import SKILLS_DATA from '../data/skills.data';

const Photo = styled.img`
    border-radius: 5px;
    height: 400px;
    width: 300px;
`;

const Title = styled.h1`
    text-align: center;
`;

const SkillsContainer = styled.div`
    background-color: #2c3e50;
    height: 100%;
    position: relative;
    padding: 30px;
`;

const SkillItemsGrid = styled.div`

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        gap: 20px;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

const BiographyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 700px) {
        flex-direction: row;
    }
`;

const BiographyContent = styled.div` 
    color: gray;
    margin: 10px;

    @media (min-width: 700px) {
        width: 500px;
    }
`;

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: SKILLS_DATA
        };
    }

    render() {
        const { skills } = this.state;
        return (
            <div>
                <SkillsContainer>
                    <Title style={{ color: 'white' }}>Skills</Title>
                    <SkillItemsGrid>
                        {
                            skills.map(skill => <Skill name={skill} />)
                        }
                    </SkillItemsGrid>
                </SkillsContainer>
                <div>
                    <Title>More about me</Title>
                    <BiographyContainer>
                        <div>
                            <Photo src={AboutMeImage} /> 
                        </div>
                        <BiographyContent>
                            Hi, I am Steven. I am passionate to continually learn new technologies 
                            and improve my skills to build great applications. 
                            
                            <br /><br />
                            My professional experience
                            is as a Software Developer Intern at Thomson Reuters where I contributed to
                            features using the technologies of JavaScript, Redux, and ASP.NET Core.
                            
                            <br /><br />
                            To improve my skills and demonstrate the value I can contribute to an organization, I have 
                            built side projects using HTML5, CSS3, React, Node.js, SQL, Java, and C#.

                            <br /><br />
                            Outside of work, I enjoy working out, Brazilian Jiu-Jitsu, and attempting to cook new recipes. 
                        </BiographyContent>
                    </BiographyContainer>
                </div>
            </div>
        );
    }
}

export default About;