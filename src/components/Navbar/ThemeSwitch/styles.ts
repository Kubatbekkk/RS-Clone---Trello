import styled from 'styled-components';

export const StyledSwitch = styled.div`
     label {
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;

        > span {
            > img {
                filter: grayscale(-2) invert(.8);
                width: 30px;
                height: 30px;
            }
        }
        > div {
            position: relative;
            width: 60px;
            height: 30px;
            background: #b3b3b3;
            border-radius: 32px;
            padding: 4px;

            &::before {
                content: '';
                position: absolute;
                width: 28px;
                height: 28px;
                border-radius: 35px;
                top: 50%;
                left: 2px;
                background: ${(props) => props.theme.backgroundColors.main};
                transform: translate(0, -50%);
                transition: .5s all;
            }
        }

        input {
            opacity: 0;
            position: absolute;

            &:checked + div {
                background: ${(props) => props.theme.backgroundColors.delete};

                &:before {
                    transform: translate(32px, -50%);
                  }
            }

        }
    }

`;
