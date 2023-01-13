import React, { memo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import styled from 'styled-components';

const LogContainer = styled.div`
  padding-top: 0.5rem;
`;

const LogDetails = styled.p`
  font-size: .75rem;
  line-height: 1rem;
  color: rgb(156 163 175);
`;

const LogQuery = styled.p`
  font-size: .875rem;
  line-height: 1.25rem;
  word-break: break-all;
`;

function Logs() {
    const logs = useAppSelector(state => state.log.log);

    return (
        <>
            {
                logs.map((log, index) => (
                    <LogContainer key={index}>
                        <LogDetails>{log.timestamp}, {log.servedBy}, {log.duration}ms</LogDetails>
                        <LogQuery>{log.query}</LogQuery>
                    </LogContainer>
                ))
            }
        </>
    );
}

export default memo(Logs);
