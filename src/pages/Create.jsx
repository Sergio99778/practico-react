import React /* , { useState } */ from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//Components
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

//imgs
/* import logo from "../assets/logos/logo_yard_sale.svg"; */

//STYLED COMPONENTS
const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const FormContainer = styled.div`
  width: 300px;
  @media (max-width: 640px) {
    height: 100%;
  }
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
  h1 {
    text-align: start;
    margin-bottom: 25px;
  }
  @media (max-width: 640px) {
    height: 100%;
    justify-content: space-around;
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

const ContainerAlign = styled.div`
  display: flex;
  flex-direction: column;
`;
//END STYLED COMPONENTS

const Create = () => {
  //Destructure data from user

  return (
    <LoginContainer>
      <FormContainer>
        <Form>
          <ContainerAlign>
            <Title value="Create your account" />
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" placeholder="Name" id="name" />
            <Label htmlFor="EmailAddress">Email address</Label>
            <Input
              name="email"
              type="email"
              placeholder="youremail@gmail.com"
              id="EmailAddress"
            />
            <Label htmlFor="Password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              id="Password"
            />
          </ContainerAlign>
          <PrimaryButton value="Join" />
        </Form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Create;
