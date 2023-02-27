import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const StyledSidebar = styled.aside<Props>`
  width: 230px;
  height: 100vh;
  position: fixed;
  background: ${(props) => props.theme.backgroundColors.menu};
  border-right: 1px ${(props) => props.theme.utils.itemSelectedOrBorderOrButton}
    solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  a {
    text-decoration: none;
  }

  > div:first-child {
    padding-top: 17px;

    h1 {
      position: relative;
    }

    h1::before {
      content: "";
      width: 132%;
      height: 1px;
      background: ${(props) => props.theme.utils.itemSelectedOrBorderOrButton};
      position: absolute;
      bottom: -10px;
      left: -35px;
    }
  }

  .login {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .closeSidebar {
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    border-radius: 50%;
    top: 5px;
    right: 5px;
    z-index: 10;
    cursor: pointer;
    display: none;

    img {
      max-width: 60%;
      filter: grayscale(1) invert(1);
    }
  }

  &.openedAnimation {
    animation: openMenuAnimation 0.3s backwards;
  }

  @keyframes openMenuAnimation {
    from {
      transform: translateX(-300px);
    }
    to {
      transform: translateX(0);
    }
  }


  @media (max-width: 815px) {
    transform: ${(props) => (props.isOpen ? 'translateX(0px)' : 'translateX(-300px)')};

    .closeSidebar {
      display: block;
    }
  }

  .team {
    margin-top: auto;
    // margin-left: 1.8rem;

    > h3 {
      font-size: 2rem;
      text-align: center;
    }

    a {
      display: flex;
      align-items: center;
      margin: .8rem;
      border: 1px solid ${(props) => props.theme.utils.todoListBorder};
      border-radius: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      background: ${(props) => props.theme.backgroundColors.main};
      font-size: ${(props) => props.theme.fontSizes.sm};
      padding: 5px;
      max-width: 200px;
    }
     > a > img {
      height: 3rem;
      width: 3rem;
      filter: grayscale(-1);
      margin-right: 1rem;
    }
  }

  .school {
    margin-top: auto;
    margin-left: 1.8rem;
    align-self: stretch;

    > div {
      width: 120px;
      margin-bottom: 2rem;

      img {
        max-width: 100%;
        filter: grayscale(80%) opacity(.5) drop-shadow(2px 2px 2px gray);
        cursor: pointer;
        transition: all .3s;
      }

      img:hover {
        filter: opacity(1);
        transform: scale(1.05);
      }
    }
  }
`;
