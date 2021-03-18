import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid #575757;
`;

const ProjectLink = styled(Link)`
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
`;

const PortfolioTitle = styled.p`
    color: #575757;
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    margin-top: 5px;
    text-align: center;
`;

const PreviewImage = styled.img`
    width: 100%;
`;

const PortfolioPreview = ({ id, name, image }) => {
    return (
        <ProjectLink to={`/project/${id}`}>
            <Container>
                <div>
                    <PreviewImage src={image} /> 
                </div>
            </Container>
            <PortfolioTitle>
                {name}
            </PortfolioTitle>
        </ProjectLink>
    );
}

export default PortfolioPreview;