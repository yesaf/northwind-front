import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';


const MenuLabel = styled.div`
  --tw-text-opacity: 1;
  font-size: .75rem;
  line-height: 1rem;
  padding: 0.75rem;
  text-transform: uppercase;

  color: rgb(156 163 175/var(--tw-text-opacity));
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

interface MenuItemProps {
    isActive?: boolean;
}

const MenuItem = styled.li.attrs<MenuItemProps>(props => ({
    style: {
        'backgroundColor': props.isActive ? 'rgb(55 65 81)' : 'transparent',
    }
}))<MenuItemProps>`
  --tw-bg-opacity: 1;
`;

const MenuLink = styled(Link)`
  --tw-text-opacity: 1;
  color: rgb(209 213 219/var(--tw-text-opacity));
  display: flex;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;

const Icon = styled.span`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;

  align-items: center;
  display: inline-flex;
  height: 1.5rem;
  justify-content: center;
  width: 3rem;
`;

interface MenuItemData {
    name: string;
    icon: string;
    link: string;
}

interface MenuBlockProps {
    label: string;
    items: MenuItemData[];
}

function MenuBlock(props: MenuBlockProps) {
    const location = useLocation();

    return (
        <div>
            <MenuLabel>{props.label}</MenuLabel>
            <MenuList>
                {
                    props.items.map((item, index) => {

                        return (
                            <MenuItem key={index} isActive={location.pathname === item.link}>
                                <MenuLink to={item.link}>
                                    <Icon>{item.icon}</Icon>
                                    <span>{item.name}</span>
                                </MenuLink>
                            </MenuItem>
                        );
                    })
                }
            </MenuList>
        </div>
    );
}

export default MenuBlock;
