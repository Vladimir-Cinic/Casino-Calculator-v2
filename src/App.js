import React from 'react';
import Calculator from './Components/Calculator.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
