import React from 'react';
import { Switch, FormControl, FormLabel, Heading, Stack  } from "@chakra-ui/react";
import { CoinGecko} from "coingecko-api"
import './Popup.css';


const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Stack spacing={8}>
          $3.03
      </Stack>
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
