import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import TableRow from './TableRow';

export const TableWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;

const Table = () => {
  const { startingData } = useGlobalContext();
  return (
    <TableWrapper>
      {startingData.map((bill) => (
        <TableRow key={bill.id} {...bill} />
      ))}
    </TableWrapper>
  );
};

export default Table;
