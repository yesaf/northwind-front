import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CustomerWithDetails } from '../../types/ServerResponses';
import { CustomersService } from '../../services/Services';
import MaterialIcon from '../../styles/MaterialIcon';
import { useNavigate } from 'react-router-dom';
import {
    Header, HeaderText, DetailsContainer, Details,
    Field, FieldCaption, BackButton, NoData,
} from '../../styles/DetailsStyles';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

function CustomerDetails() {
    const { id } = useParams();
    const [customer, setCustomer] = useState<undefined | CustomerWithDetails>();
    const service = new CustomersService();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    useEffect(() => {
        if (id) {
            service.getCustomerById(id).then((response) => {
                dispatch(addLog(createLog(response.data)));
                dispatch(addResultCount(1));
                setCustomer(response.data.data.data[0]);
            });
        }
    }, [id]);

    const goBack = () => {
        navigate('/customers');
    };

    return (
        <>
            {
                customer ?
                    <DetailsContainer>
                        <Header>
                            <MaterialIcon>ballot</MaterialIcon>
                            <HeaderText>Product information</HeaderText>
                        </Header>
                        <Details>
                            <div>
                                <Field>
                                    <FieldCaption>Company Name</FieldCaption>
                                    <span>{customer["Company Name"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Contact Name</FieldCaption>
                                    <span>{customer["Contact Name"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Contact Title</FieldCaption>
                                    <span>{customer["Contact Title"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Address</FieldCaption>
                                    <span>{customer.Adress}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>City</FieldCaption>
                                    <span>{customer.City}</span>
                                </Field>
                            </div>
                            <div>
                                <Field>
                                    <FieldCaption>Postal Code</FieldCaption>
                                    <span>{customer["Postal Code"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Region</FieldCaption>
                                    <span>{customer.Region}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Country</FieldCaption>
                                    <span>{customer.Country}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Phone</FieldCaption>
                                    <span>{customer.Phone}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Fax</FieldCaption>
                                    <span>{customer.Fax}</span>
                                </Field>
                            </div>
                        </Details>
                        <div>
                            <BackButton onClick={goBack}>Go back</BackButton>
                        </div>
                    </DetailsContainer>
                    :
                    <NoData>No such customer</NoData>
            }
        </>
    );
}

export default memo(CustomerDetails);
