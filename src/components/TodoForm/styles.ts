import styled from 'styled-components';

export const StyledTodoForm = styled.div`
    position: fixed;
    width: calc(100% - 230px);
    height: calc(100% - 65px);
    left: 230px;
    top: 65px;

    z-index: 100;
    background: rgb(0 0 0/0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

       .closeBtn {
            filter: grayscale(1) invert(1);
            background: transparent;
            border: none;
            cursor: pointer;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 10px;
            right: 10px;

            img {
                width: 100%;
            }
        }

    form {
        position: relative;
        border-radius: 15px;
        margin: 30px;
        padding: 20px;
        width: 400px;
        background: ${(props) => props.theme.backgroundColors.item};

        .status {
            margin: 10px 0;
            display: flex;
            flex-direction: column;

            select {
                border: none;
                border-radius: 15px;
                outline: none;
                height: 50px;
                padding: 0 20px;
                color: ${(props) => props.theme.textColors.primary};
                background: ${(props) => props.theme.backgroundColors.delete};
                font-size: 1.8rem;
                opacity: 0.8;
                transition: opacity .2s;
            }
            select:hover {
                opacity: 1;
            }
        }
    }
    @media (max-width: 815px) {
        width: 100%;
        left: 0;
    }
    @media (max-width: 500px) {
        form {
            width: 100%;
        }
    }
`;
