import styled from 'styled-components';
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;

  .layout-side {
    width: 100%;
    height: 100%;
  }

  .layout-right {
    .header {
      background-color: #fff;
      .trigger:hover {
        color: #1890ff;
      }
      .trigger {
        padding: 0 24px;
        font-size: 18px;
        line-height: 64px;
        cursor: pointer;
        transition: color 0.3s;
      }
    }
    .content {
      background-color: #fff;
      box-sizing: border-box;
    }
  }
`;

export { MainWrapper };
