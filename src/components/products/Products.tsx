import React, { useState } from 'react';
import Table from '../UI/table/Table';
import { productsData } from '../../tmp/data';

function Products() {

    const [products, setProducts] = useState(productsData.slice(0, 20));

    const setPage = (page: number) => {
        const offset = (page - 1) * 20;
        const limit = 20;
        setProducts(productsData.slice(offset, offset + limit));
    }

    return (
        <Table
            title={'Products'}
            columns={['Name', 'Price', 'Stock', 'Orders']}
            data={products}
            pagesNumber={Math.ceil(productsData.length / 20)}
            linksColumn={'Name'}
            idColumn={'Id'}
            onPageChange={(newPage) => setPage(newPage)}
        />
    );
}

export default Products;
