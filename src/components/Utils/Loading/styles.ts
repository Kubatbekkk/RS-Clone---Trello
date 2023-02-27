import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export interface SizeProps {
  width: string;
  height: string;
}

export const StyledLoading = styled.div<SizeProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);

    border-top: 2px solid ${(props) => props.theme.backgroundColors.delete};
    border-right: 2px solid ${(props) => props.theme.backgroundColors.delete};
    border-bottom: 2px solid ${(props) => props.theme.backgroundColors.delete};
    border-left: 4px solid ${(props) => props.theme.textColors.primary};
    background: transparent;
    width: ${(props) => (props.width === '100%' ? '62px' : '35px')};
    height: ${(props) => (props.height === '100%' ? '62px' : '35px')};
    border-radius: 50%;
  }
`;
