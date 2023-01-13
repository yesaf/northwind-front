import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { ProductsService } from '../../services/Services';
import { Product } from '../../types/ServerResponses';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

function Products() {
    const limit = 20;
    const [products, setProducts] = useState<undefined | Product[]>();
    const [count, setCount] = useState(0);
    const service = new ProductsService();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    const getProducts = (page: number) => {
        service.getProducts({ limit, page }).then((response) => {
            const results = response.data.data.data;

            dispatch(addLog(createLog(response.data)));
            dispatch(addResultCount(results.length));

            setProducts(results);
        });
    };

    const getProductsCount = () => {
        service.getRowCount().then((response) => {
            dispatch(addLog(createLog(response.data)));
            setCount(response.data.data.data[0].RowCount);
        });
    }

    useEffect(() => {
        getProductsCount()
        getProducts(1);
    }, []);


    const setPage = (page: number) => {
        getProducts(page);
    };

    return (
        <>
            {
                products && count &&
                <Table
                    title={'Products'}
                    columns={['Name', "Qt per unit", 'Price', 'Stock', 'Orders']}
                    data={products}
                    pagesNumber={Math.ceil(count / limit)}
                    linksColumn={'Name'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            }
        </>

    );
}

export default Products;
