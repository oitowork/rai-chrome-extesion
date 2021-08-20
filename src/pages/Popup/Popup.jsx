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
  SimpleGrid,
  Button,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import './Popup.css';
import reflexerLogo from '../../assets/img/reflexer.finance.png';
import reflexer from '../../assets/img/brand-white.svg';
import { turnOFFToRAI, turnONToRAI } from '../Content/modules/print';

const Popup = () => {
  function Example() {
    const { colorMode, toggleColorMode } = useColorMode();
  }
  return (
    <Center py={5}>
      <Flex>
        <VStack
          background="#bdc7"
          w="100%"
          borderRadius="3xl"
          borderColor="green.50"
          overflow="hidden"
          maxW="sm"
          maxH="sm"
          alignItems="center"
          justifyItems="center"
          marginTop="10px"
        >
          <Box h="90%" as="section" py="10" px={{ base: '5', md: '9' }}>
            <Wrap>
              <SimpleGrid
                marginLeft="auto"
                marginRight="auto"
                columns={{ base: 1, lg: 3 }}
                spacing={{ base: '8', lg: '0' }}
                maxW="6xl"
                mx="auto"
                justifyItems="center"
                alignItems="center"
              >
                <Text
                  textAlign="center"
                  marginLeft="auto"
                  marginRight="auto"
                  color="#101010"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  RAI
                </Text>
                <Stack align="center" spacing={4}>
                  <img className="avatar" src={reflexerLogo} width="50%"></img>
                  <Text
                    marginLeft="auto"
                    marginRight="auto"
                    color="#68D391"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    $3.03
                  </Text>
                </Stack>
              </SimpleGrid>
            </Wrap>
            <Spacer />
            <Stack marginLeft="auto" marginRight="auto" direction="row">
              <Switch
                marginRight="auto"
                marginLeft="auto"
                marginTop="20px"
                marginBottom="20px"
                className="switch"
                size="lg"
                colorScheme="#68D391"
                onChange={turnOFFToRAI}
              />
            </Stack>

            <Spacer />
            <Stack align="center">
              <img src={reflexer} alt="Reflexer" width="70%"></img>
            </Stack>
          </Box>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Popup;
