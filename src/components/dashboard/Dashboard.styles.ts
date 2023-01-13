import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1.5rem;
`;

export const Caption = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0;
`;

export const Text = styled.p`
  font-size: .875rem;
  line-height: 1.25rem;
  margin: 0;
`;

export const SubText = styled.p`
  --tw-text-opacity: 1;
  color: rgb(31 41 55/var(--tw-text-opacity));

  font-size: .75rem;
  line-height: 1rem;
  margin: 0;
`;

export const LogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;
