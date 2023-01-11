import React, { Fragment } from 'react';
import styled from 'styled-components';
import TopBar from './components/topBar/TopBar';
import SideMenu from './components/sideMenu/SideMenu';

const MainSection = styled.section`
  padding: 1.5rem;
  width: calc(100% - 3rem);

  transition-duration: .15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);

  &.menu-open {
    margin-left: 15rem;
  }

  @media (min-width: 1024px) {
    margin-left: 15rem;
    width: calc(100% - 15rem - 3rem);
  }
`;

interface LayoutProps {
    children: React.ReactNode;
}

function Layout(props: LayoutProps) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleMenuButtonClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Fragment>
            <TopBar isMenuOpen={menuOpen} onMenuButtonClick={handleMenuButtonClick}/>
            <SideMenu isMenuOpen={menuOpen}/>
            <MainSection className={menuOpen ? 'menu-open' : ''}>
                {props.children}
            </MainSection>
        </Fragment>
    );
}

export default Layout;
