import styled from 'styled-components';

interface IProps {
  showAnima: boolean;
}

const LoadingWrapper = styled.div<IProps>`
  position: absolute;
  z-index: 999;
  animation-name: ${(p) => (p.showAnima ? 'show' : 'hidden')};
  visibility: hidden;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  width: 100vw;
  height: 100vh;

  .spin-content {
    position: absolute;
    top: 50%;
    left: 50%;
    padding-top: 5px;
    width: 4vw;
    height: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    transform: translate(-50%, -50%);
    span {
      i {
        background-color: #fff;
      }
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }
`;

export { LoadingWrapper };
