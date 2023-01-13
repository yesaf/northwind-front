import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  --tw-border-opacity: 1;
  border-color: rgb(243 244 246/var(--tw-border-opacity));
  border-top-width: 1px;
  padding: 0.75rem 1.5rem;
`;

export const PageText = styled.small`
  font-size: 0.8em;
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const PageButton = styled.button`
  margin-left: 0.25rem;
  margin-right: 0.25rem;

  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  color: rgb(0 0 0/var(--tw-text-opacity));
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  border-radius: 0.25rem;
  border: 1px solid rgb(249 250 251/var(--tw-border-opacity));
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;

  font-size: 100%;

  &.active-page {
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219/var(--tw-border-opacity));
  }

  &:hover {
    --tw-border-opacity: 1;
    border-color: rgb(107 114 128/var(--tw-border-opacity));
  }
`;

export const BetweenPages = styled.span`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-size: 100%;
`;
