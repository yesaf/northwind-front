import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { userTimeSlice } from '../../../../store/reducers/UserTimeSlice';
import MaterialIcon from '../../../../styles/MaterialIcon';

const TimeContainer = styled.div`
  display: flex;
  --tw-text-opacity: 1;
  color: rgb(31 41 55/var(--tw-text-opacity));
  margin-left: 1.5rem;
  padding: 0.5rem 0.75rem;
  align-items: center;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const NavBar = styled.nav`
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  border-bottom-width: 1px;
  border-color: rgb(243 244 246/var(--tw-border-opacity));
  border-style: solid;
  display: flex;
  align-items: center;
  height: 3.5rem;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition-duration: .15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  width: auto;
  z-index: 30;
  padding-left: 15rem;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    padding-left: 0;

    &.menu-open {
      padding-left: 15rem;
    }
  }
`;

const OpenMenuButton = styled(MaterialIcon)`
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface TopBarProps {
    isMenuOpen: boolean;
    onMenuButtonClick: () => void;
}

function TopBar(props: TopBarProps) {
    const { updateTime } = userTimeSlice.actions;
    const dispatch = useAppDispatch();
    const { time } = useAppSelector(state => state.userTime);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(updateTime((new Date()).toLocaleTimeString()));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <NavBar className={props.isMenuOpen ? 'menu-open' : ''}>
                <TimeContainer>{time}</TimeContainer>
                <OpenMenuButton onClick={props.onMenuButtonClick}>
                    menu
                </OpenMenuButton>
            </NavBar>

        </Fragment>
    );
}

export default TopBar;
