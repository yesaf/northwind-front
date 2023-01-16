import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { InfoContainer, Caption, LogContainer, Text, SubText } from './Dashboard.styles';
import { useAppSelector } from '../../hooks/redux';
import Logs from './Logs';

type ApiResponse = {
    city: string,
    continentCode: string,
    continentName: string,
    countryCode: string,
    countryName: string,
    ipAddress: string,
    stateProv: string,
}

function Dashboard() {
    const [userCountry, setUserCountry] = useState('');
    const log = useAppSelector(state => state.log);

    useEffect(() => {
        axios.get('https://api.db-ip.com/v2/free/self').then((res: AxiosResponse<ApiResponse>) => {
            setUserCountry(res.data.countryCode);
        });
    }, []);


    return (
        <>
            <InfoContainer>
                <div>
                    <Caption>Worker</Caption>
                    <Text>Country: {userCountry}</Text>
                </div>
                <div>
                    <Caption>SQL Metrics</Caption>
                    <Text>Query count: {log.queryCount}</Text>
                    <Text>Results count: {log.resultCount}</Text>
                    <Text># SELECT: {log.keywordsCount.select}</Text>
                    <Text># SELECT WHERE: {log.keywordsCount.where}</Text>
                    <Text># SELECT LEFT JOIN: {log.keywordsCount.leftJoin}</Text>
                </div>
            </InfoContainer>
            <LogContainer>
                <Caption>Activity log</Caption>
                <SubText>Explore the app and see metrics here</SubText>
                <Logs/>
            </LogContainer>
        </>
    );
}

export default Dashboard;
