import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import Resume from '../assets/StevenGarciaResume.pdf';

class Navbar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            isMenuClosed: true
        }
    }

    onTabDropdown = () => {
        console.log("clicked");
        const { isMenuClosed } = this.state;
        this.setState({ isMenuClosed: !isMenuClosed });
    }

    render() {
        const { isMenuClosed } = this.state;
        return (
            <Nav>
                <div>
                    <NavLink to='/'>
                        STEVEN GARCIA
                    </NavLink>
                </div>
                <div>
                    { 
                        isMenuClosed ? 
                        <HamburgerMenuIcon 
                            active={isMenuClosed}
                            fontSize='large' 
                            onClick={this.onTabDropdown} 
                        />
                        :
                        <CloseMenuIcon 
                            active={!isMenuClosed}
                            fontSize='large' 
                            onClick={this.onTabDropdown}
                        />
                    }

                    <MenuOptions style={{
                        visibility: `${isMenuClosed ? 'hidden' : 'visible'}`
                    }}>
                        <NavLink to='/'>
                            PORTFOLIO
                        </NavLink>
                        <NavLink to='/about'>
                            ABOUT
                        </NavLink>
                        <Anchor target="_blank" href={Resume}>
                            RESUME
                        </Anchor>
                    </MenuOptions>
                </div>
            </Nav>
        )
    }
}

export default Navbar;

const Nav = styled.nav`
    display: flex;
    height: 70px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #2c3e50;
    border-bottom: 1px solid white;
    padding: 0px 10px;

    @media (min-width: 700px) {
        padding: 0px 20px;
    }
`;

const NavLink = styled(Link)`
    color: #fff;
    margin: 10px;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #ccc;
    }
`;

const Anchor = styled.a`
    color: #fff;
    margin: 10px;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        color: #ccc;
    }
`;

const HamburgerMenuIcon = styled(MenuIcon)`
    color: #fff;
    cursor: pointer;

    @media (min-width: 700px) {
        visibility: hidden;
    }
`;

const CloseMenuIcon = styled(ClearIcon)`
    color: #fff;
    cursor: pointer;

    @media (min-width: 700px) {
        visibility: hidden;
    }
`;

const MenuOptions = styled.div`
    background-color: #2c3e50;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    z-index: 10;

    @media (min-width: 700px) {
        flex-direction: row;
        padding: 0;
        position: relative;
        border: none;
        top: -20px;
        background-color: transparent;
        visibility: visible !important;
    }
`;
