import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 1.5rem;
`;

const Caption = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0;
`;

const Text = styled.p`
  font-size: .875rem;
  line-height: 1.25rem;
  margin: 0;
`;

const SubText = styled.p`
  --tw-text-opacity: 1;
  color: rgb(31 41 55/var(--tw-text-opacity));

  font-size: .75rem;
  line-height: 1rem;
  margin: 0;
`;

const LogContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
  `;

function Dashboard() {
    const [userCountry, setUserCountry] = useState('');

    // useEffect(() => {
    //     axios.get('https://api.db-ip.com/v2/free/self').then((res) => {
    //         console.log(res.data);
    //     });
    // }, []);


    return (
        <>
            <InfoContainer>
                <div>
                    <Caption>Worker</Caption>
                    <Text>Country: {userCountry}</Text>
                </div>
                <div>
                    <Caption>SQL Metrics</Caption>
                    <Text>Query count: 0</Text>
                    <Text>Results count: 0</Text>
                    <Text># SELECT: 0</Text>
                    <Text># SELECT WHERE: 0</Text>
                    <Text># SELECT LEFT JOIN: 0</Text>
                </div>
            </InfoContainer>
            <LogContainer>
                <Caption>Activity log</Caption>
                <SubText>Explore the app and see metrics here</SubText>
            </LogContainer>
        </>
    );
}

export default Dashboard;
