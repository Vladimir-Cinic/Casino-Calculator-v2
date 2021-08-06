import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import Button from './Button';
import { Input } from './TableRow';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const InputsContainer = styled.div`
  display: flex;
`;

export const Box = styled.div`
  height: auto;
  width: 100%;
  text-align: center;
`;

export const TargetInput = styled(Input)`
  margin-top: 0.7rem;
  width: 80%;
  height: 2rem;
  font-size: 1.2rem;
  padding: 0;
  border-radius: ${({ theme }) => theme.radius};
  @media ${({ theme }) => theme.breakpoints.xsm} {
    height: 2.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 0.6rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-shadow: 0 0 1px #feeeee, 0 0 1px #feeeee,
    0 0 1px ${({ theme }) => theme.textBlue},
    0 0 3px ${({ theme }) => theme.textBlue},
    0 0 3px ${({ theme }) => theme.textBlue},
    0 0 4px ${({ theme }) => theme.textBlue},
    0 0 5px ${({ theme }) => theme.textBlue};
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 1.5rem;
  }
`;

export const Span = styled.span`
  color: red;
`;

const Inputs = () => {
  const { total, setTargetValue, targetValue } = useGlobalContext();

  const handleInput = (e) => {
    let targetInput = parseInt(e.target.value);
    if (isNaN(targetInput)) {
      targetInput = 0;
    }
    setTargetValue(targetInput);
  };

  return (
    <InputsWrapper>
      <InputsContainer>
        {' '}
        <Box>
          <Label htmlFor='total'>Total Amount</Label>
          <TargetInput
            type='text'
            id='total'
            disabled
            value={!total ? '' : `${total} RSD`}
          />
        </Box>
        <Box>
          <Label htmlFor='target'>Target Amount</Label>

          <TargetInput
            type='text'
            id='target'
            value={!targetValue ? '' : targetValue}
            onChange={handleInput}
          />
        </Box>
      </InputsContainer>

      <BtnContainer>
        <Button type={'total'} />
        <Button type={'clear'} />
      </BtnContainer>
    </InputsWrapper>
  );
};

export default Inputs;
