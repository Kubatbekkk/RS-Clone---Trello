import React from 'react';
import { StyledLoading, SizeProps } from './styles';

const Loading = ({ width, height }: SizeProps) => (
  <StyledLoading width={width} height={height}>
    <div />
  </StyledLoading>
);

export default Loading;
