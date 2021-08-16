import React from 'react';
import {
  Switch,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Box,
  Flex,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  Text,
  VStack,
  Center,
  Spacer,
} from '@chakra-ui/react';
import './Popup.css';
import reflexerLogo from '../../assets/img/reflexer.finance.png';
import reflexer from '../../assets/img/brand-white.svg';

const Popup = () => {
  return (
    <Center py={9}>
      <Flex alignItems="center">
        <VStack
          borderRadius="xl"
          borderColor="green.50"
          overflow="hidden"
          maxW="sm"
          maxH="sm"
          alignItems="center"
        >
          <Box alignItems="center">
            <Wrap>
              <WrapItem alignItems="center">
                <Stack spacing={3}>
                  <Avatar
                    size="lg"
                    name="reflexer.finance"
                    src={reflexerLogo}
                  />{' '}
                  <Text color="#68D391" fontSize="4xl">
                    $3.03
                  </Text>
                </Stack>
              </WrapItem>
            </Wrap>
            <Spacer />
            <Stack align="center" direction="row">
              <Switch size="lg" colorScheme="#68D391" />
            </Stack>
            <Spacer />
            <Stack>
              <img src={reflexer} alt="Reflexer"></img>
            </Stack>
          </Box>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Popup;
