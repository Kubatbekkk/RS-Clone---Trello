import React from 'react';
import { StyledContainer } from './styles';

const Container = ({ children } : { children: React.ReactNode }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
