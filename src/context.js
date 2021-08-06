import React, { useState, useContext, useEffect } from 'react';
import { data } from './data';

const AppContext = React.createContext();

const getValues = () => {
  let localStorageValues = localStorage.getItem('values');
  if (!localStorageValues) return data;
  return JSON.parse(localStorageValues);
};

const getTargetValue = () => {
  let target = localStorage.getItem('target');
  if (!target) return 0;
  return Number(JSON.parse(target));
};

const AppProvider = ({ children }) => {
  const [startingData, setStartingData] = useState(getValues());
  const [targetValue, setTargetValue] = useState(getTargetValue());
  const [total, setTotal] = useState('');
  const [message, setMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');

  useEffect(() => {
    calculateTotal();
  }, []);

  const calculateTotal = () => {
    let totalAmount = startingData
      .map((item) => item.output)
      .filter((item) => item !== 0 && item !== '')
      .reduce((acc, curr) => acc + curr, 0);
    setTotal(totalAmount);
    if (!totalAmount) {
      setMessage('Vrednosti Nisu Unete');
      setAlertColor('#0193e7');
      setTimeout(() => {
        setMessage('');
      }, 1500);
      return;
    }
    if (!targetValue) {
      setTargetValue(0);
      setMessage('');
      setAlertColor('#0193e7');
      return;
    }
    let overallTotal = Math.abs(targetValue - totalAmount);
    if (targetValue === totalAmount) {
      setAlertColor('#0193e7');
      setMessage(`U kasi imate tačan iznos.`);
    }
    if (targetValue < totalAmount) {
      setAlertColor('#009432');
      setMessage(`U kasi imate ${overallTotal} dinara više.`);
    }
    if (targetValue > totalAmount) {
      setAlertColor('#b71540');
      setMessage(`U kasi imate ${overallTotal} dinara manje.`);
    }
  };

  useEffect(() => {
    localStorage.setItem('target', JSON.stringify(targetValue));
  }, [targetValue]);

  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(startingData));
  }, [startingData]);

  const clearAll = () => {
    setStartingData([...data]);
    setTotal('');
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateTotal();
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      clearAll();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <AppContext.Provider
      value={{
        startingData,
        setStartingData,
        calculateTotal,
        total,
        targetValue,
        setTargetValue,
        message,
        clearAll,
        alertColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
