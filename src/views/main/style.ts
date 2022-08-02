import styled from 'styled-components';
const MainWrapper = styled.div`
  width: 100vw;

  .layout {
    width: 100%;
    height: 100%;
    .header {
      display: flex;
      align-items: center;
    }

    .layout-side {
      ::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      scrollbar-width: none; /* Firefox */
    }

    .layout-right {
      .header {
        background-color: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
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
        border-radius: 5px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export { MainWrapper };
