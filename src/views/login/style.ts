import styled from 'styled-components';

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const LoginTabsWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-50%);
  .login-tabs {
    @media screen and (min-width: 1200px) {
      width: 40%;
    }
    @media screen and (max-width: 1200px) {
      width: 70%;
    }
    height: 300px;
    margin: 0 auto;
  }
`;

export { LoginWrapper, LoginTabsWrapper };
