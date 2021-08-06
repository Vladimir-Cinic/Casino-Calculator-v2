import React, { useEffect } from 'react';
import styled from 'styled-components';
import Table from './Table';
import Inputs from './Inputs';
import MessageDisplay from './MessageDisplay';

export const Main = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0.5rem;
  box-shadow: 0px 0px 15px #000, 0px 0px 15px #000;
  background-image: url('https://img.wallpapersafari.com/desktop/1920/1080/4/44/JgEZQu.jpg');
  @media ${({ theme }) => theme.breakpoints.xsm} {
    padding: 1rem;
  }
`;

export const Wrapper = styled.article`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.radius};
  max-height: 47rem;
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
    height: 47rem;
  }
`;

const Calculator = () => {
  return (
    <Main>
      <Wrapper>
        <Table />
        <Inputs />
        <MessageDisplay />
      </Wrapper>
    </Main>
  );
};

export default Calculator;
