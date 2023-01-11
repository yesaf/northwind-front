import React, { Fragment } from 'react';
import styled from 'styled-components';
import MenuBlock from './MenuBlock';

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55/var(--tw-bg-opacity));
  height: 100vh;
  width: 15rem;
  z-index: 40;
  overflow: hidden;
  
  @media (max-width: 1023px) {
    left: -15rem;

    transition-duration: .15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    
    &.open {
      left: 0;
    }
  }
`;

const Name = styled.div`
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  align-items: center;
  background-color: rgb(17 24 39/var(--tw-bg-opacity));
  color: rgb(255 255 255/var(--tw-text-opacity));
  display: flex;
  flex-direction: row;
  height: 3.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  width: 100%;
`;

const Bold = styled.b`
  font-weight: 900;
`;

interface SideMenuProps {
    isMenuOpen: boolean;
}

function SideMenu(props: SideMenuProps) {

    return (
        <Fragment>
            <Aside className={props.isMenuOpen ? 'open' : ''}>
                <Name>
                    <div>
                        <Bold>Northwind</Bold> Traders
                    </div>
                </Name>
                <MenuBlock label={'General'} items={[
                    {
                        name: 'Home',
                        icon: 'home',
                        link: '/',
                    },
                    {
                        name: 'Dashboard',
                        icon: 'display_settings',
                        link: '/dash',
                    }
                ]}/>
                <MenuBlock label={'Backoffice'} items={[
                    {
                        name: 'Suppliers',
                        icon: 'inventory',
                        link: '/suppliers',
                    },
                    {
                        name: 'Products',
                        icon: 'production_quantity_limits',
                        link: '/products',
                    },
                    {
                        name: 'Orders',
                        icon: 'shopping_cart',
                        link: '/orders',
                    },
                    {
                        name: 'Employees',
                        icon: 'badge',
                        link: '/employees',
                    },
                    {
                        name: 'Customers',
                        icon: 'group',
                        link: '/customers',
                    },
                    {
                        name: 'Search',
                        icon: 'search',
                        link: '/search',
                    }
                ]}/>
            </Aside>
        </Fragment>
    );
}

export default SideMenu;
