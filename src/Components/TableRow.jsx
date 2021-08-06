import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  height: 2rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 2.5rem;
  }
`;
export const ImageColumn = styled.div`
  height: inherit;
  width: 20%;
  box-shadow: inset 2px 2px 5px #141414, inset -5px -5px 10px #212121;
  padding: 0.3rem 0.5rem;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  filter: saturate(2);
`;
export const InputColumn = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  margin: 0 0.5rem;
`;
export const OutputColumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0 0.5rem;
  background: none;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  border: none;
  text-shadow: 0 0 1px #feeeee, 0 0 1px #feeeee,
    0 0 1px ${({ theme }) => theme.textBlue},
    0 0 3px ${({ theme }) => theme.textBlue},
    0 0 3px ${({ theme }) => theme.textBlue},
    0 0 4px ${({ theme }) => theme.textBlue},
    0 0 5px ${({ theme }) => theme.textBlue};
  box-shadow: inset 2px 2px 5px #141414, inset -5px -5px 10px #212121;
  border-radius: ${({ theme }) => theme.radius};
`;
const TableRow = ({ billValue, url, id, output, billCount }) => {
  const { startingData, setStartingData } = useGlobalContext();
  const handleInput = (e) => {
    let billCount = parseInt(e.target.value);
    if (isNaN(billCount)) {
      billCount = '';
    }
    let output = billCount * billValue;
    setStartingData(
      startingData.map((item) => {
        if (item.id === id) {
          return { ...item, billCount, output };
        }
        return item;
      })
    );
  };

  return (
    <Row>
      <ImageColumn>
        <Image src={url} />
      </ImageColumn>
      <InputColumn>
        <Input
          type='number'
          value={!billCount ? '' : billCount}
          min='0'
          onChange={handleInput}
        />
      </InputColumn>
      <OutputColumn>
        <Input
          type='text'
          disabled
          value={!output ? '' : output}
          min='0'
          onChange={handleInput}
        />
      </OutputColumn>
    </Row>
  );
};

export default TableRow;
