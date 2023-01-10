import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  --tw-border-opacity: 1;
  border-color: rgb(243 244 246/var(--tw-border-opacity));
  border-top-width: 1px;
  padding: 0.75rem 1.5rem;
`;

const PageText = styled.small`
  font-size: 0.8em;
`;

const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const PageButton = styled.button`
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

const BetweenPages = styled.span`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-size: 100%;
`;

interface PaginationProps {
    pagesNumber: number;
    activePage: number;
    onChangePage: (page: number) => void;
}

function Pagination(props: PaginationProps) {

    const mapPages = (pagesNumber: number, activePage: number) => {
        const start = (
            <PageButton
                className={1 === props.activePage ? 'active-page' : ''}
                onClick={() => props.onChangePage(1)}
                key={1}
            >
                1
            </PageButton>
        );

        const end = (
            <PageButton
                className={pagesNumber === props.activePage ? 'active-page' : ''}
                onClick={() => props.onChangePage(pagesNumber)}
                key={pagesNumber}
            >
                {pagesNumber}
            </PageButton>
        );

        const middle = [];
        const middleStart = activePage - 3 > 1 ? activePage - 3 : 2;
        const middleEnd = activePage + 5 < pagesNumber ? activePage + 5 : pagesNumber - 1;

        for (let i = middleStart; i <= middleEnd; i++) {
            if (i < pagesNumber) {
                middle.push(
                    <PageButton
                        className={i === props.activePage ? 'active-page' : ''}
                        onClick={() => props.onChangePage(i)}
                        key={i}
                    >
                        {i}
                    </PageButton>
                );
            }
        }

        const result = [start];
        middleStart > 2 && result.push(<BetweenPages key={'between1'}>...</BetweenPages>);
        result.push(...middle);
        middleEnd < pagesNumber - 1 && result.push(<BetweenPages key={'between2'}>...</BetweenPages>);
        pagesNumber > 1 && result.push(end);

        return result
    };

    return (
        <PaginationContainer>
            {
                props.pagesNumber > 1 &&
                <Buttons>
                    {
                        mapPages(props.pagesNumber, props.activePage)
                    }
                </Buttons>
            }


            <PageText>
                Page {props.activePage} of {props.pagesNumber}
            </PageText>


        </PaginationContainer>
    );
}

export default Pagination;
