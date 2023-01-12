import styled from 'styled-components';
import MaterialIcon from '../../styles/MaterialIcon';

export const Container = styled.div`
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));
  border-color: rgb(243 244 246/var(--tw-border-opacity));
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;

  padding: 1.5rem;
`;

export const Field = styled.div`
  margin-bottom: 0.75rem;
`;

export const Label = styled.label`
  font-weight: 700;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 0.5rem;
`;

export const Input = styled.input`
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255/var(--tw-bg-opacity));

  font-size: 1rem;

  height: 2.5rem;
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175/var(--tw-border-opacity));
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;

  padding-left: 2.5rem;
  width: 50%;
  box-sizing: border-box;

  line-height: inherit;
  font-weight: inherit;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Icon = styled(MaterialIcon)`
  position: absolute;
  height: 2.5rem;
  left: 0.5rem;
`;

export const TablesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 0.5rem;
`;

export const ResultsTitle = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
