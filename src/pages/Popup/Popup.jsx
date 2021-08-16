import React from 'react';
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable USD to RAI?
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
      </header>
    </div>
  );
};

export default Popup;
