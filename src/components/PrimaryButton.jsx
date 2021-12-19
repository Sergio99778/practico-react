import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: var(--hospital-green);
  border-radius: 8px;
  border: none;
  color: var(--white);
  height: 50px;
  width: 100%;
  cursor: pointer;
  font-size: var(--md);
  font-weight: bold;
`;

const PrimaryButton = ({ value }) => {
  return <Button>{value}</Button>;
};

export default PrimaryButton;