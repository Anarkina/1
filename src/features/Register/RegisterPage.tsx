import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  return (
    <Box textAlign="center" mt="20">
      <Heading>Регистрация</Heading>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
