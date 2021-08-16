import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a><img src="/images/logo.svg" alt="" /></a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Account</a>
            </RightMenu>
            <CustomMenu onClick={() => setBurgerStatus(true)} />
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <MenuExtra>
                    {cars && cars.map((car, index) => (
                        <li key={index}><a href="">{car}</a></li>
                    ))}
                </MenuExtra>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade-In</a></li>
                <li><a href="">Roadster</a></li>
                <li><a href="">Semi</a></li>
                <li><a href="">Commercial Energy</a></li>
                <li><a href="">Utilities</a></li>
                <li><a href="">Test Drive</a></li>
                <li><a href="">Charging</a></li>
                <li><a href="">Find Us</a></li>
                <li><a href="">Support</a></li>
                <MenuExtra>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Tesla Account</a></li>
                </MenuExtra>
            </BurgerNav>
        </Container>
    )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 20px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    overflow-y: scroll;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            text-transform: uppercase;
            font-size: 12px;
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
`;

const MenuExtra = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export default Header
