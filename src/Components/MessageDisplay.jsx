import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

export const MsgScreen = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  max-height: 6rem;
  box-shadow: inset 2px 2px 5px #141414, inset -5px -5px 10px #212121;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 0 1px #feeeee, 0 0 1px #feeeee,
    0 0 1px ${(props) => props.color}, 0 0 3px ${(props) => props.color},
    0 0 3px ${(props) => props.color}, 0 0 4px ${(props) => props.color},
    0 0 5px ${(props) => props.color};
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

const MessageDisplay = () => {
  const { message, alertColor } = useGlobalContext();
  return <MsgScreen color={alertColor}>{message}</MsgScreen>;
};

export default MessageDisplay;
