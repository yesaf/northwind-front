import React, { useEffect, useState } from 'react';
import Radio from './Radio';
import * as Styles from './SearchStyles';
import SearchResults from './SearchResults';
import { CustomerSearchResult, ProductSearchResult } from '../../types/ServerResponses';
import { CustomersService, ProductsService } from '../../services/Services';
import { createLog } from '../../helpers/createLog';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';


function Search() {

    const productsService = new ProductsService();
    const customersService = new CustomersService();

    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    const [inputValue, setInputValue] = useState('');
    const [table, setTable] = useState('products');
    const [query, setQuery] = useState('');
    const [productsResult, setProductsResult] = useState<ProductSearchResult[]>([]);
    const [customersResult, setCustomersResult] = useState<CustomerSearchResult[]>([]);
    const [loading, setLoading] = useState(false);


    const handleCheck = (label: string) => {
        setTable(label);
    };

    const handlePress = (key: string) => {
        if (key === 'Enter') {
            setQuery(inputValue);
        }
    };

    useEffect(() => {
        if (query) {

            if (table === 'products') {
                setLoading(true);
                productsService.searchProducts(query).then((response) => {
                    const res = response.data;
                    const results = res.data.data;
                    setProductsResult(results);
                    dispatch(addLog(createLog(res)));
                    dispatch(addResultCount(results.length));
                    setLoading(false);
                });
            } else if (table === 'customers') {
                setLoading(true);
                customersService.searchCustomers(query).then((response) => {
                    const res = response.data;
                    const results = res.data.data;
                    setCustomersResult(results);
                    dispatch(addLog(createLog(res)));
                    dispatch(addResultCount(results.length));
                    setLoading(false);
                });
            }
        }
    }, [query, table]);

    return (
        <Styles.Container>
            <Styles.Field>
                <Styles.Label>Search Database</Styles.Label>
                <Styles.InputContainer>
                    <Styles.Input type="text" value={inputValue}
                                  onChange={(e) => setInputValue(e.target.value)}
                                  onKeyPress={(e) => handlePress(e.key)}
                                  placeholder="Enter keyword..."/>
                    <Styles.Icon>search</Styles.Icon>
                </Styles.InputContainer>
            </Styles.Field>
            <Styles.Field>
                <Styles.Label>Tables</Styles.Label>
                <Styles.TablesContainer>
                    <Radio label={'products'} checked={table === 'products'} onCheck={handleCheck}/>
                    <Radio label={'customers'} checked={table === 'customers'} onCheck={handleCheck}/>
                </Styles.TablesContainer>
            </Styles.Field>
            <Styles.ResultsTitle>Search Results</Styles.ResultsTitle>
            {
                loading ?
                    <Styles.Message>Loading...</Styles.Message> :
                    table === 'customers' && customersResult.length > 0 ?
                        <SearchResults results={customersResult}/> :
                        table === 'products' && productsResult.length > 0 ?
                            <SearchResults results={productsResult}/> :
                            <Styles.Message>No results</Styles.Message>
            }
        </Styles.Container>
    );
}

export default Search;
