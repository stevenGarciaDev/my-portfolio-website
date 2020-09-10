import React from 'react';

import styled from 'styled-components';

import CheckIcon from '@material-ui/icons/Check';

const SkillWidget = styled.div`
    background-color: #808080;
    color: white;
    margin: 10px 0px;
    padding: 5px;
    width: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Text = styled.span`
    position: relative;
    left: 5px;
    top: 1px;
    font-size: 18px;
`;

const Skill = ({ name }) => {
    return (
        <SkillWidget>
            <CheckIcon style={{ color: 'white' }} />
            <Text>{ name }</Text>
        </SkillWidget>
    );
}

export default Skill;