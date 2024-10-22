import React from "react";
import { Formik, Field, Form,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { registerSchema } from '../../../shared/validation'; 

const RegisterForm = () => {
 

  const handleSubmit = async (values: any)=>{
    try {
      //запрос будет когда к бэку перейду
      console.log(`Success: ${values}`);

    }
    catch (error) {
      console.error(`Not succes ${error}`)
    }
  }

  return (
    <Box width="400px" margin="0 auto">
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FormControl isInvalid={!!errors.name && touched.name}>
              <FormLabel htmlFor="name">Имя</FormLabel>
              <Field as={Input} id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field as={Input} id="email" name="email" type="email" />
              <ErrorMessage name="email" component="div" />
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor="password">Пароль</FormLabel>
              <Field as={Input} id="password" name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </FormControl>

            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Зарегистрироваться
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default RegisterForm;