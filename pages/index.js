import { useState, useEffect } from 'react';
import {
  Button,
  Heading,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import BackwardCounter from '../components/BackwardCounter';
import ForwardCounter from '../components/ForwardCounter';
import NewTask from '../components/NewTask/NewTask';
import Tasks from '../components/Tasks/Tasks';
// import useHttp from '.././hooks/useHttp';
import useHttp from '../hooks/use-http';


const Index = () => {
//! this is just for dark mode...
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: 'black',
    dark: 'white',
  };
  const textColor = {
    light: 'white',
    dark: 'black',
  };
//!

  return (
    <>
      <VStack minHeight="100vh" bg={bgColor[colorMode]}>
        <Heading
          pt={20}
          align="center"
          color={textColor[colorMode]}
        >
          Section idk: Building Custom Hooks
        </Heading>
  
      
      </VStack>
    </>
  );
};

export default Index;
