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
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  border-bottom-width: 1px;
  border-color: rgb(243 244 246/var(--tw-border-opacity));
  display: flex;
  height: 3.5rem;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition-duration: .15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  width: auto;
  z-index: 30;
  padding-left: 15rem;
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
