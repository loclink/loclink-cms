import styled from 'styled-components';

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const LoginTabsWrapper = styled.div`

  @media screen and (min-width: 1200px) {
    top: 45%;
  }
  @media screen and (max-width: 1200px) {
    top: 40%;
  }

  position: absolute;
  width: 100%;
  transform: translateY(-50%);
  .login-tabs {
    @media screen and (min-width: 1200px) {
      width: 50%;
    }
    @media screen and (max-width: 1200px) {
      width: 80%;
    }

    height: 300px;
    margin: 0 auto;
  }
`;

const TabPaneWrapper = styled.div`
  /*大屏 （pc）*/
  @media screen and (min-width: 1200px) {
    width: 45%;
  }

  /*中等屏幕 （旧式显示器）*/
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    width: 40%;
  }

  /*超小屏幕 （手机） 小于等于768*/
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  margin: 0 auto;
`;

export { LoginWrapper, LoginTabsWrapper, TabPaneWrapper };
