import React, { Fragment } from 'react';
import styled from 'styled-components';
import TopBar from './components/topBar/TopBar';
import SideMenu from './components/sideMenu/SideMenu';

const MainSection = styled.section`
  padding: 1.5rem;
`;

interface LayoutProps {
    children: React.ReactNode;
}

function Layout(props: LayoutProps) {
    return (
        <Fragment>
            <TopBar/>
            <SideMenu/>
            <MainSection>
                {props.children}
            </MainSection>
        </Fragment>
    );
}

export default Layout;
