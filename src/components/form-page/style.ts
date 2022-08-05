import styled from 'styled-components';

const FormPageWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  margin-bottom: 20px;
  position: relative;

  .commit-footer {
    height: 32px;
    position: relative;

    .btn-wrapper {
      position: absolute;
      right: 0;
      display: flex;

      .ant-btn {
        margin-left: 10px;
      }
    }
  }

`;
export { FormPageWrapper };
