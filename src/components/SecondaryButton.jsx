import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid var(--hospital-green);
  color: var(--hospital-green);
  height: 50px;
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
  margin-top: 14px;
  margin-bottom: 30px;
`;

const SecondaryButton = ({ value, onClick, type }) => {
  let propsClick = () => {};
  if (onClick) propsClick = onClick;

  return (
    <Button type={type ? type : "button"} onClick={propsClick}>
      {value}
    </Button>
  );
};

export default SecondaryButton;
