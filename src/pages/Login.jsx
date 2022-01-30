import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//Components
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

//imgs
import logo from "../assets/logos/logo_yard_sale.svg";

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
  justify-items: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  a {
    color: var(--hopital-green);
    font-size: var(--sm);
    text-align: center;
    text-decoration: none;
    margin-bottom: 54px;
  }
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
  margin-bottom: 22px;
`;

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginContainer>
      <Logo src={logo} />
      <FormContainer onSubmit={handleSubmit}>
        <Form>
          <Label htmlFor="EmailAddress">Email address</Label>
          <Input
            type="email"
            placeholder="youremail@gmail.com"
            id="EmailAddress"
          />
          <Label htmlFor="Password">Password</Label>
          <Input type="password" placeholder="Password" id="Password" />
          <PrimaryButton value="Log in" />
          <Link to="/password">Forgot my password</Link>
        </Form>
        <SecondaryButton value="Sign Up" />
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
