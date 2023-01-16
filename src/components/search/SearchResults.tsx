import React from 'react';
import { CustomerSearchResult, ProductSearchResult } from '../../types/ServerResponses';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SearchResultsProps {
    results: ProductSearchResult[] | CustomerSearchResult[];
}

const ResultContainer = styled.div`
  margin-top: 0.5rem;  
`;

const ResultDetails = styled.p`
  color: rgb(156 163 175);
  font-size: .875rem;
  line-height: 1.25rem;
`;

function SearchResults({ results }: SearchResultsProps) {

    const productResultDiv = (index: number, product: ProductSearchResult) => (
        <ResultContainer key={index}>
            <Link to={`/product/${product['Id']}`}>{product['Name']}</Link>
            <ResultDetails>
              #{index+1}, Quantity Per Unit: {product['Qt per unit']}, Price: {product['Price']}, Stock: {product['Stock']}
            </ResultDetails>
        </ResultContainer>
    );

    const customerResultDiv = (index: number, customer: CustomerSearchResult) => (
        <ResultContainer key={index}>
            <Link to={`/product/${customer['Id']}`}>{customer['Name']}</Link>
            <ResultDetails>
              #{index+1}, Contact: {customer['Contact']}, Title: {customer['Title']}, Phone: {customer['Phone']}
            </ResultDetails>
        </ResultContainer>
    );

    return (

        <div>
            {
                results.map((result, index) => {
                    if ('Qt per unit' in result) {
                        return productResultDiv(index, result as ProductSearchResult);
                    }
                    return customerResultDiv(index, result as CustomerSearchResult);
                })
            }
        </div>

    );

}

export default SearchResults;
