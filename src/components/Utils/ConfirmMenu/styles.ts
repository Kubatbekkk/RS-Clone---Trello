import styled from 'styled-components';

export const StyledConfirmMenu = styled.div`
    color: white;
    position: fixed;
    width: calc(100% - 230px);
    height: calc(100vh - 65px);
    left: 230px;
    top: 65px;

    z-index: 100;
    background: rgb(0 0 0/0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    > div {
        text-align: center;
        background: ${(props) => props.theme.backgroundColors.item};
        border-radius: 15px;
        max-width: 300px;
        padding: 25px;

        > div {
            margin-top: 10px;
            width: 100%;
            gap: 10px;
            justify-content: center;
            display: flex;
        }
    }
    @media (max-width: 815px) {
        width: 100%;
        left: 0;
      }
`;
