import { ProductInOrder } from '../../types/ServerResponses';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableRow = styled.tr`
  display: table-row;
  max-width: 100%;
  position: relative;
`;

const TableCell = styled.td`
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-bottom-width: 0;

  padding: 0.5rem 0.75rem;
`;

const Header = styled.header`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: rgb(243 244 246);
  display: flex;

  padding: 0.75rem 1rem;
  align-items: center;
  font-weight: 700;
`;

function ProductsInOrder({ products }: { products: ProductInOrder[] }) {
    return (
        <div>
            <Header>Products in order</Header>
            <table>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Order Price</th>
                    <th>Total Price</th>
                    <th>Discount</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell><Link to={'/product/' + product.ProductId}>
                                    {product.Product}
                                </Link></TableCell>
                                <TableCell>{product.Quantity}</TableCell>
                                <TableCell>${product['Order Price']}</TableCell>
                                <TableCell>${product['Total Price']}</TableCell>
                                <TableCell>{product.Discount}%</TableCell>
                            </TableRow>
                        );
                    })
                }
                </tbody>
            </table>
        </div>

    );
}

export default ProductsInOrder;
