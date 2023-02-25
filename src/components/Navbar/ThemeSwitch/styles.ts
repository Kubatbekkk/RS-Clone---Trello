import styled from 'styled-components';

export const StyledSwitch = styled.div`

    label {
        display: flex;
        gap: 10px;
        align-items: center;
        cursor: pointer;

        div {
            width: 60px;
            height: 30px;
            background: #b3b3b3;
            border-radius: 32px;

            // &:before {
            //     content: '';
            //     position: absolute;
            //     width: 28px;
            //     height: 28px;
            //     border-radius: 35px;
            //     top: 50%;
            //     left: 4px; /* <!-- Make up for padding
            //     background: white;
            //     transform: translate(0, -50%);
            // }
        }

        input {
            opacity: 0;
            position: absolute;
        }
    }

`;
