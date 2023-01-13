import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0.75rem 1rem;
  font-weight: 700;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: rgb(243 244 246);
`;

export const HeaderText = styled.span`
  margin-left: 0.5rem;
`;

export const DetailsContainer = styled.div`
  background-color: rgb(255 255 255);
  border-color: rgb(243 244 246);
  border-radius: 0.25rem;
  border-width: 1px;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: rgb(243 244 246);
`;

export const Field = styled.div`
  margin-bottom: 0.75rem;
`;

export const FieldCaption = styled.span`
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const BackButton = styled.button`
  background-color: rgb(239 68 68);
  border-color: rgb(239 68 68);
  color: rgb(255 255 255);

  border-style: solid;

  margin: 1.5rem;

  border-radius: 0.25rem;
  border-width: 1px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;

  font-style: inherit;
  font-size: 0.975rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

export const NoData = styled.div`
  margin: 1.5rem;
`;

