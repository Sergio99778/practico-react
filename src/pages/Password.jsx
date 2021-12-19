import React from 'react';
import styled from '@emotion/styled';

//css
import './css/Password.css';

//logo
import logo from '../assets/logos/logo_yard_sale.svg';

//Components
import PrimaryButton from '../components/PrimaryButton';

//styled components
const Login = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 48px;
  justify-self: center;
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

const Label = styled.label`
  font-size: var(--sm);
  font-weight: bold;
  margin-bottom: 4px;
`;

const Input = styled.input`
  background-color: var(--text-input-field);
  border: none;
  border-radius: 8px;
  height: 30px;
  font-size: var(--md);
  padding: 6px;
  margin-bottom: 12px;
`;

const Password = () => {
  return (
    <Login>
      <FormContainer>
        <Logo src={logo} alt="Logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <Form>
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="" id="password" placeholder="Password" />
          <Label htmlFor="re-password">Re-enter password</Label>
          <Input type="password" name="" id="re-password" placeholder="Password" />
          <PrimaryButton value="Confirm" />
        </Form>
      </FormContainer>
    </Login>
  );
};

export default Password;
