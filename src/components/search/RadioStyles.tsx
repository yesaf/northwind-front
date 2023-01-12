import styled from 'styled-components';

export const RadioLabel = styled.label`
  margin-right: 0.75rem;

  gap: 0.5rem;
  
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  position: relative;
`;

export const CustomRadio = styled.span`
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' 
  viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' 
  d='M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z'/%3E%3C/svg%3E");
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219/var(--tw-border-opacity));
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;

  box-sizing: border-box;

  width: 1.25rem;
  height: 1.25rem;

  &.checked {
    border-color: rgb(59 130 246/var(--tw-border-opacity));
    border-width: 5px;
  }
`;
