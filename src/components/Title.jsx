import React from 'react';
import styled from '@emotion/styled';

const MainTitle = styled.h1`
  font-size: var(--lg);
  margin-bottom: 12px;
  text-align: center;
`;

const Title = ({ value }) => {
  return <MainTitle>{value}</MainTitle>;
};

export default Title;
