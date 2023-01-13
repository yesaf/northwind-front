import styled from 'styled-components';
import MaterialIcon from '../../../styles/MaterialIcon';

export const TableContainer = styled.div`
  background-color: rgb(255 255 255);
  border-color: rgb(243 244 246);
  border-radius: 0.25rem;
  border-width: 1px;
`;

export const Header = styled.header`
  --tw-border-opacity: 1;
  align-items: stretch;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: rgb(243 244 246/var(--tw-border-opacity));
  display: flex;
`;

export const HeaderTitle = styled.span`
  flex-grow: 1;
  font-weight: 700;

  align-items: center;
  display: flex;
  padding: 0.75rem 1rem;
`;

export const HeaderIcon = styled(MaterialIcon)`
  align-items: center;
  display: flex;
  padding: 0.75rem 1rem;
`;
