import React, { useState } from 'react'
import { Box, Grid, Button, TextInput, Heading, Form, FormField } from 'grommet';
import { User } from 'grommet-icons';
import { getState } from '../components/State';

const LoginPage = () => {
  const [{ user }, dispatch] = getState();
  const [form, setValues] = useState({
    email: null,
    password: null,
    error: null,
  });


  const handleEmailChange = (e) => {
    if (e.target.value) {
      setValues({ ...form, error: null, email: e.target.value });
    } else {
      setValues({ ...form, error: "Please provide a valid email address" });
    }
    e.preventDefault();
  }

  const onSubmit = ({ value }) => {
    if (value) {
      dispatch({
        type: 'authUser',
        user: { email: form.email }
      });
      location.href = '/';
    } 
  }

  return (
    <Box fill="horizontal" align="center" alignSelf="center" justify="center">
      <Box align="center" alignSelf="center" justify="center" elevation="small" pad="medium" width="medium" wrap={false} background={{"color":"light-1"}}>
        <Heading size="small" truncate={false} margin="none">
          Login
        </Heading>
        <Form onSubmit={onSubmit} messages={form.messages}>
          <FormField name="Email" label="Email" required={true} onBlur={handleEmailChange} onChange={handleEmailChange} error={form.error} />
          <FormField label="Password" type="password"/>
          <Button label="Login" type="submit" primary={true} style={{borderRadius:'6px'}} reverse={false} />
        </Form>
      </Box>
   </Box>
  );
};

export default LoginPage;