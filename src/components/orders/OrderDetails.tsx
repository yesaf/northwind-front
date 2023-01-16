import React, { memo, useEffect, useState } from 'react';
import { OrderWithDetails, ProductInOrder } from '../../types/ServerResponses';
import { OrdersService } from '../../services/Services';
import MaterialIcon from '../../styles/MaterialIcon';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
    Header, HeaderText, DetailsContainer, Details,
    Field, FieldCaption, BackButton, NoData,
} from '../../styles/DetailsStyles';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLogOrderDetails } from '../../helpers/createLog';
import ProductsInOrder from './ProductsInDetails';

function OrderDetails() {
    const { id } = useParams();
    const [order, setOrder] = useState<undefined | OrderWithDetails>();
    const [productsInOrder, setProductsInOrder] = useState<ProductInOrder[]>([]);
    const service = new OrdersService();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    useEffect(() => {
        if (id) {
            service.getOrderById(id).then((response) => {
                createLogOrderDetails(response.data).forEach((log) => {
                    dispatch(addLog(log));
                });
                dispatch(addResultCount(2));
                setOrder(response.data.orderInformation.data[0]);
                setProductsInOrder(response.data.productsInOrder.data);
            });
        }
    }, [id]);

    const goBack = () => {
        navigate('/orders');
    };

    return (
        <>
            {
                order ?
                    <DetailsContainer>
                        <Header>
                            <MaterialIcon>ballot</MaterialIcon>
                            <HeaderText>Product information</HeaderText>
                        </Header>
                        <Details>
                            <div>
                                <Field>
                                    <FieldCaption>Customer Id</FieldCaption>
                                    <Link to={"/customer/"+order["Customer Id"]}>{order["Customer Id"]}</Link>
                                </Field>
                                <Field>
                                    <FieldCaption>Ship Name</FieldCaption>
                                    <span>{order["Ship Name"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Total Products</FieldCaption>
                                    <span>{order["Total Products"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Total Quantity</FieldCaption>
                                    <span>{order["Total Quantity"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Total Price</FieldCaption>
                                    <span>${order["Total Price"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Total Discount</FieldCaption>
                                    <span>${order["Total Discount"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Ship Via</FieldCaption>
                                    <span>{order["Ship Via"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Freight</FieldCaption>
                                    <span>${order["Freight"]}</span>
                                </Field>
                            </div>
                            <div>
                                <Field>
                                    <FieldCaption>Order Date</FieldCaption>
                                    <span>{order['Order Date'].slice(0, 10)}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Required Date</FieldCaption>
                                    <span>{order['Required Date'].slice(0, 10)}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Shipped Date</FieldCaption>
                                    <span>{order['Shipped Date'].slice(0, 10)}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Ship City</FieldCaption>
                                    <span>{order['Ship City']}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Ship Region</FieldCaption>
                                    <span>{order['Ship Region']}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Ship Postal Code</FieldCaption>
                                    <span>{order['Ship Postal Code']}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Ship Country</FieldCaption>
                                    <span>{order['Ship Country']}</span>
                                </Field>
                            </div>
                        </Details>
                        <ProductsInOrder products={productsInOrder}/>
                        <div>
                            <BackButton onClick={goBack}>Go back</BackButton>
                        </div>
                    </DetailsContainer>
                    :
                    <NoData>No such order</NoData>
            }
        </>
    );
}

export default memo(OrderDetails);
