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
        this.props.toggleNavStatus(!this.props.isNavOpen);
    }

    render() {
        const { isNavOpen } = this.props;
        return (
            <Nav>
                <div>
                    <NavLink to='/'>
                        STEVEN GARCIA
                    </NavLink>
                </div>
                <div>
                    { 
                        isNavOpen ? 
                        <CloseMenuIcon
                            fontSize='large' 
                            onClick={this.onTabDropdown}
                        />
                        :
                        <HamburgerMenuIcon
                            fontSize='large' 
                            onClick={this.onTabDropdown} 
                        /> 
                    }

                    <MenuOptions
                        onClick={this.onTabDropdown}
                        style={{
                        visibility: `${isNavOpen ? 'visible' : 'hidden'}`
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
    align-items: center;
    background-color: #2c3e50;
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: row;
    height: 70px;
    justify-content: space-between;
    padding: 0px 10px;
    position: fixed;
    top: 0;
    width: calc(100% - 20px);
    z-index: 4;

    @media (min-width: 700px) {
        padding: 0px 20px;
        width: calc(100% - 40px);
    }
`;

const NavLink = styled(Link)`
    color: #fff;
    font-size: 16px;
    margin: 10px;
    text-decoration: none;

    &:hover {
        color: #ccc;
    }
`;

const Anchor = styled.a`
    color: #fff;
    font-size: 16px;
    margin: 10px;
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
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    display: flex;
    flex-direction: column;
    left: 0;
    padding-left: 10px;
    position: absolute;
    top: 60px;
    width: 100%;
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
