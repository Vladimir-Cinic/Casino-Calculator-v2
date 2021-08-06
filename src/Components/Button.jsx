import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

export const Btn = styled.button`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 0.7rem;
  border-radius: ${({ theme }) => theme.radius};
  letter-spacing: 1px;
  box-shadow: -5px -5px 12px #212121, 5px 5px 12px #141414;
  text-shadow: 0 0 1px #feeeee, 0 0 1px #feeeee,
    0 0 1px ${({ theme }) => theme.textBlue},
    0 0 3px ${({ theme }) => theme.textBlue},
    0 0 3px ${({ theme }) => theme.textBlue},
    0 0 4px ${({ theme }) => theme.textBlue},
    0 0 5px ${({ theme }) => theme.textBlue};
  background: none;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  &:active {
    box-shadow: -2px -2px 5px #212121, 2px 2px 5px #141414;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;
const Button = ({ type }) => {
  const { calculateTotal, clearAll, handleKeyPress } = useGlobalContext();
  return (
    <Btn onClick={type === 'total' ? calculateTotal : clearAll}>{type}</Btn>
  );
};

export default Button;
