import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Popup from './Popup';
import './index.css';

const colors = {
  brand: {
    900: '#151414',
    800: '#153e75',
    700: '#2a69ac',
  },
  price: {
    900: '#68D391',
  },
};
const theme = extendTheme({
  colors,
});

render(
  <ChakraProvider theme={theme}>
    <Popup />
  </ChakraProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
