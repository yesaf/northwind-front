import React, { memo, useEffect, useState } from 'react';
import { EmployeeWithDetails } from '../../types/ServerResponses';
import { EmployeesService } from '../../services/Services';
import MaterialIcon from '../../styles/MaterialIcon';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
    Header, HeaderText, DetailsContainer, Details,
    Field, FieldCaption, BackButton, NoData,
} from '../../styles/DetailsStyles';
import { useAppDispatch } from '../../hooks/redux';
import { logSlice } from '../../store/reducers/LogSlice';
import { createLog } from '../../helpers/createLog';

function CustomerDetails() {
    const { id } = useParams();
    const [customer, setCustomer] = useState<undefined | EmployeeWithDetails>();
    const service = new EmployeesService();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const addLog = logSlice.actions.addLog;
    const addResultCount = logSlice.actions.addResultCount;

    useEffect(() => {
        if (id) {
            service.getEmployeeById(id).then((response) => {
                dispatch(addLog(createLog(response.data)));
                dispatch(addResultCount(1));
                setCustomer(response.data.data.data[0]);
            });
        }
    }, [id]);

    const goBack = () => {
        navigate('/employees');
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
                                    <FieldCaption>Name</FieldCaption>
                                    <span>{customer["Name"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Title</FieldCaption>
                                    <span>{customer["Title"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Title Of Courtesy</FieldCaption>
                                    <span>{customer["Title Of Courtesy"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Birth Date</FieldCaption>
                                    <span>{customer["Birth Date"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Hire Date</FieldCaption>
                                    <span>{customer["Hire Date"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Address</FieldCaption>
                                    <span>{customer["Address"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>City</FieldCaption>
                                    <span>{customer["City"]}</span>
                                </Field>
                            </div>
                            <div>
                                <Field>
                                    <FieldCaption>Postal Code</FieldCaption>
                                    <span>{customer["Postal Code"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Country</FieldCaption>
                                    <span>{customer["Country"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Home Phone</FieldCaption>
                                    <span>{customer["Home Phone"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Extension</FieldCaption>
                                    <span>{customer["Extension"]}</span>
                                </Field>
                                <Field>
                                    <FieldCaption>Notes</FieldCaption>
                                    <span>{customer["Notes"]}</span>
                                </Field>
                                {
                                    customer["ReportsToId"] &&
                                        <Field>
                                            <FieldCaption>Reports To</FieldCaption>
                                            <Link to={"/employee/"+customer["ReportsToId"]}>
                                                {customer["Reports To"]}
                                            </Link>
                                        </Field>
                                }
                            </div>
                        </Details>
                        <div>
                            <BackButton onClick={goBack}>Go back</BackButton>
                        </div>
                    </DetailsContainer>
                    :
                    <NoData>No such employee</NoData>
            }
        </>
    );
}

export default memo(CustomerDetails);
