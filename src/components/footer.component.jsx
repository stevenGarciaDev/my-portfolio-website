import React from 'react';

import styled from 'styled-components';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterContainer = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
`;

const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    height: 200px;
    background-color: #2c3e50;
`;

const Icon = styled.div`
    margin: 0px 5px;
    color: white;
    cursor: pointer;
`;

const BottomFooter = styled.div`
    background-color: #233140;
    height: 100px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <Icon>
                    <a 
                        href='https://www.linkedin.com/in/steven-garcia-24981611a/' 
                        target='_blank'
                        style={{ color: 'white' }}>
                        <LinkedInIcon fontSize='large' style={{ fontSize: '50px' }}  />
                    </a>
                </Icon>
                <Icon>
                    <a 
                        href='https://github.com/stevenGarciaDev'
                        target='_blank'
                        style={{ color: 'white' }}>
                        <GitHubIcon fontSize='large' style={{ fontSize: '50px' }}  />
                    </a>
                </Icon>
            </FooterLinksContainer>
            <BottomFooter>
               
            </BottomFooter>
        </FooterContainer>
    );
}

export default Footer;