import React, { Fragment } from 'react';
import styled from 'styled-components';

const TimeContainer = styled.div`
  display: flex;
  --tw-text-opacity: 1;
  color: rgb(31 41 55/var(--tw-text-opacity));
  margin-left: 1.5rem;
  padding: 1rem;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  
  height: 3.5rem;
  top: 0;
  width: 100%;
  //padding-left: 15rem;
`;


function TopBar() {
    return (
        <Fragment>
            <NavBar>
                <TimeContainer>12:00:00</TimeContainer>
            </NavBar>
        </Fragment>
    );
}

export default TopBar;
