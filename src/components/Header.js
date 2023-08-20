/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <a>
            <img src='/images/logo.svg' alt='logo' />
        </a>
        <Menu>
            <p>
                <a href='#'>Vehicles</a>
            </p>
            <p>
                <a href='#'>Energy</a>
            </p>
            <p>
                <a href='#'>Charging</a>
            </p>
            <p>
                <a href='#'>Discover</a>
            </p>
            <p>
                <a href='#'>Shop</a>
            </p>
        </Menu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    height: 56px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    top: 0;
    left: 0;
    right: 0;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    padding: 0 8px;
    gap: 24px;

    p{
        font-weight: 600;
        text-transform: capitalize;
    }
`;