import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

//imgs
import logo from "../assets/logos/logo_yard_sale.svg";
import email from "../assets/icons/email.svg";

//Components
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

//STYLED COMPONENTS
//STYLED COMPONENTS
//STYLED COMPONENTS
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
  justify-items: center;
`;

const Form = styled.form`
  width: inherit;
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

const EmailImage = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background-color: var(--text-input-field);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  img {
    width: 80px;
  }
`;
const EmailResend = styled.p`
  font-size: var(--sm);
  span {
    color: var(--very-light-pink);
  }
  a {
    color: var(--hospital-green);
    text-decoration: none;
  }
`;
//END STYLED COMPONENTS
//END STYLED COMPONENTS
//END STYLED COMPONENTS

const Password = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleLoginClick = () => navigate("/", { replace: true });

  const [isSent, setIsSent] = useState(false);

  return (
    <Login>
      <FormContainer onSubmit={handleSubmit}>
        <Logo src={logo} alt="Logo" />

        <Title
          value={isSent ? "Email has been sent!" : "Create a new password"}
        />
        <SubTitle
          value={
            isSent
              ? "Please check your inbox for instructions on how to reset the password"
              : "Enter a new password for your account"
          }
        />
        {isSent ? (
          <>
            <EmailImage>
              <img src={email} alt="email" />
            </EmailImage>
            <PrimaryButton value="Login" onClick={handleLoginClick} />
            <EmailResend>
              <span>Didn't receive the email?</span>
              <Link to="/">Resend</Link>
            </EmailResend>
          </>
        ) : (
          <Form>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name=""
              id="password"
              placeholder="Password"
            />
            <Label htmlFor="re-password">Re-enter password</Label>
            <Input
              type="password"
              name=""
              id="re-password"
              placeholder="Password"
            />
            <PrimaryButton type="submit" value="Confirm" />
          </Form>
        )}
      </FormContainer>
    </Login>
  );
};

export default Password;
