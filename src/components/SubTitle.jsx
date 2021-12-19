import React from 'react';
import styled from '@emotion/styled';

const MainSubTitle = styled.p`
  color: var(--very-light-pink);
  font-size: var(--md);
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 32px;
  text-align: center;
`;

const SubTitle = ({ value }) => {
  return <MainSubTitle>{value}</MainSubTitle>;
};

export default SubTitle;
