import styled from 'styled-components';

const LoadingWrapper = styled.div`
  position: absolute;
  z-index: 999;

  top: 50%;
  left: 50%;
  padding-top: 5px;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s;
  visibility: visible;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  /*大屏 （pc）*/
  @media screen and (min-width: 1200px) {
    width: 5vw;
    height: 5vw;
  }

  /*中等屏幕 （旧式显示器）*/
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 8vw;
    height: 8vw;
  }

  /*超小屏幕 （手机） 小于等于768*/
  @media screen and (max-width: 768px) {
    width: 17vw;
    height: 17vw;
  }
  .spin-content {
    text-align: center;

    span {
      i {
        background-color: #fff;
      }
    }
  }
`;

export { LoadingWrapper };
