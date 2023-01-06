import React, { Fragment } from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;

  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55/var(--tw-bg-opacity));
  height: 100vh;
  width: 15rem;
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

function SideMenu() {
    return (
        <Fragment>
            <Aside>
                <Name>
                    <div>
                        <Bold>Northwind</Bold>{" Traders"}
                    </div>
                </Name>
            </Aside>
        </Fragment>
    );
}

export default SideMenu;
