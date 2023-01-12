import React, { useState } from 'react';
import Radio from './Radio';
import * as Styles from './SearchStyles';


function Search() {

    const [inputValue, setInputValue] = useState('');
    const [table, setTable] = useState('products');
    const [query, setQuery] = useState('');

    const handleCheck = (label: string) => {
        setTable(label);
    };

    const handlePress = (key: string) => {
        if (key === 'Enter') {
            setQuery(inputValue);
        }
    }

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
        </Styles.Container>
    );
}

export default Search;
