import React, { useEffect, useState } from 'react';
import Table from '../UI/table/Table';
import { productsData } from '../../tmp/data';
import { ProductsService } from '../../services/Services';
import { Product } from '../../types/types';

function Products() {
    const limit = 20;
    const [products, setProducts] = useState<undefined | Product[]>();
    const service = new ProductsService();

    const getProducts = (page: number) => {
        service.getProducts({ limit, page }).then((response) => {
            const data = response.data.data.data;
            setProducts(data);
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
