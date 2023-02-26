import styled, { keyframes } from 'styled-components';

export const StyledHome = styled.div`
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoading = styled.div`
  height: 100%;
  width: 100%;
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
    width: 62px;
    height: 62px;
    border-radius: 50%;
  }
`;
