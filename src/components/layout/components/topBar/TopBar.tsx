import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { userTimeSlice } from '../../../../store/reducers/UserTimeSlice';

const TimeContainer = styled.div`
  display: flex;
  --tw-text-opacity: 1;
  color: rgb(31 41 55/var(--tw-text-opacity));
  margin-left: 1.5rem;
  padding: 0.5rem 0.75rem;
  align-items: center;
`;

const NavBar = styled.nav`
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  border-bottom-width: 1px;
  border-color: rgb(243 244 246/var(--tw-border-opacity));
  border-style: solid;
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
  box-sizing: border-box;
`;


function TopBar() {
    const { updateTime } = userTimeSlice.actions;
    const dispatch = useAppDispatch();
    const { time } = useAppSelector(state => state.userTime);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(updateTime((new Date()).toLocaleTimeString()));
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <Fragment>
            <NavBar>
                <TimeContainer>{time}</TimeContainer>
            </NavBar>
        </Fragment>
    );
}

export default TopBar;
