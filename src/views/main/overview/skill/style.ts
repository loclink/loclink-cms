import styled from 'styled-components';
const SkillWrapper = styled.div`
  .title {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
  }

  .overview {
    font-size: 18px;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    div {
      margin-bottom: 10px;
    }
  }

  .skill-content {
    margin-top: 20px;
    .skill-tabs {
      max-width: 50vw;
      margin: 0 auto;
    }
    .panel {
      font-size: 16px;
    }
  }
`;
export { SkillWrapper };
