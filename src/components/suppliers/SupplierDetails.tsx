import React, { memo, useEffect, useState } from 'react';
import { SupplierWithDetails } from '../../types/ServerResponses';
import { SuppliersService } from '../../services/Services';
import MaterialIcon from '../../styles/MaterialIcon';
import { useParams, useNavigate } from 'react-router-dom';
import { Header, HeaderText, DetailsContainer, Details,
    Field, FieldCaption, BackButton, NoData } from '../../styles/DetailsStyles'
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

function SupplierDetails() {
    const { id } = useParams();
    const [supplier, setSupplier] = useState<undefined | SupplierWithDetails>();
    const service = new SuppliersService();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    useEffect(() => {
        if (id) {
            service.getSupplierById(id).then((response) => {
                dispatch(addLog(createLog(response.data)));
                dispatch(addResultCount(1));
                setSupplier(response.data.data.data[0]);
            });
        }
    }, [id]);

    const goBack = () => {
        navigate('/suppliers');
    }

    return (
        <>
            {
                supplier ?
                    <DetailsContainer>
                        <Header>
                            <MaterialIcon>ballot</MaterialIcon>
                            <HeaderText>Supplier information</HeaderText>
                        </Header>
                            <Details>
                                <div>
                                    <Field>
                                        <FieldCaption>Company Name</FieldCaption>
                                        <span>{supplier.Company}</span>
                                    </Field>
                                    <Field>
                                        <FieldCaption>Contact Name</FieldCaption>
                                        <span>{supplier.Contact}</span>
                                    </Field>
                                    <Field>
                                        <FieldCaption>Contact Title</FieldCaption>
                                        <span>{supplier.Title}</span>
                                    </Field>
                                    <Field>
                                        <FieldCaption>Address</FieldCaption>
                                        <span>{supplier.Address}</span>
                                    </Field>
                                    <Field>
                                        <FieldCaption>City</FieldCaption>
                                        <span>{supplier.City}</span>
                                    </Field>
                                </div>
                                <div>
                                    <Field>
                                        <FieldCaption>Region</FieldCaption>
                                        <span>{supplier.Region}</span>
                                    </Field>
                                    <Field>
                                        <FieldCaption>Postal Code</FieldCaption>
                                        <span>{supplier['Postal Code']}</span>
                                    </Field>
                                    <Field>
                                        <FieldCaption>Country</FieldCaption>
                                        <span>{supplier.Country}</span>
                                    </Field>
                                    <Field>
                                        <FieldCaption>Phone</FieldCaption>
                                        <span>{supplier.Phone}</span>
                                    </Field>
                                </div>
                            </Details>
                        <div>
                            <BackButton onClick={goBack}>Go back</BackButton>
                        </div>
                    </DetailsContainer>
                    :
                    <NoData>No such supplier</NoData>
            }
        </>
    );
}

export default memo(SupplierDetails);
