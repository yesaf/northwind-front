import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { productsData } from '../../tmp/data';
import { ProductsService } from '../../services/Services';
import { Product } from '../../types/ServerResponses';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

function Products() {
    const limit = 20;
    const [products, setProducts] = useState<undefined | Product[]>();
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

    useEffect(() => {
        getProducts(1);
    }, []);


    const setPage = (page: number) => {
        getProducts(page);
    };

    return (
        <>
            {
                products &&
                <Table
                    title={'Products'}
                    columns={['Name', "Qt per unit", 'Price', 'Stock', 'Orders']}
                    data={products}
                    pagesNumber={Math.ceil(productsData.length / 20)}
                    linksColumn={'Name'}
                    idColumn={'Id'}
                    onPageChange={(newPage) => setPage(newPage)}
                />
            }
        </>

    );
}

export default Products;
