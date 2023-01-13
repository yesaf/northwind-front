import React from 'react';
import { PaginationContainer, Buttons, PageButton, PageText, BetweenPages } from './Pagination.styles';

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
