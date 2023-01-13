import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductWithDetails } from '../../types/ServerResponses';
import { ProductsService } from '../../services/Services';
import MaterialIcon from '../../styles/MaterialIcon';
import { useNavigate, Link } from 'react-router-dom';
import {
    Header, HeaderText, DetailsContainer, Details,
    Field, FieldCaption, BackButton, NoData,
} from '../../styles/DetailsStyles';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState<undefined | ProductWithDetails>();
    const service = new ProductsService();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    useEffect(() => {
        if (id) {
            service.getProductById(id).then((response) => {
                dispatch(addLog(createLog(response.data)));
                dispatch(addResultCount(1));
                setProduct(response.data.data.data[0]);
            });
        }
    }, [id]);

    const goBack = () => {
        navigate('/products');
    };

    return (
        <>
            {
                product ?
                    <DetailsContainer>
                        <Header>
                            <MaterialIcon>ballot</MaterialIcon>
                            <HeaderText>Product information</HeaderText>
                        </Header>
                        <Details>
                            <div>
                                <Field>
                                    <FieldCaption>Product Name</FieldCaption>
                                    <span>{product.ProductName}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Supplier</FieldCaption>
                                    <Link to={'/supplier/' + product.SupplierId}>
                                        {product.Supplier}
                                    </Link>
                                </Field>
                                <Field>
                                    <FieldCaption>Quantity per unit</FieldCaption>
                                    <span>{product['Quantity per unit']}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Unit price</FieldCaption>
                                    <span>${product['Unit price']}</span>
                                </Field>
                            </div>
                            <div>
                                <Field>
                                    <FieldCaption>Units in stock</FieldCaption>
                                    <span>{product['Units in stock']}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Units on order</FieldCaption>
                                    <span>{product['Units on order']}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Reorder level</FieldCaption>
                                    <span>{product['Reorder level']}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Discontinued</FieldCaption>
                                    <span>{product.Discontinued}</span>
                                </Field>
                            </div>
                        </Details>
                        <div>
                            <BackButton onClick={goBack}>Go back</BackButton>
                        </div>
                    </DetailsContainer>
                    :
                    <NoData>No such product</NoData>
            }
        </>
    );
}

export default memo(ProductDetails);
