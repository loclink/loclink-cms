import React, { memo } from 'react';
import { SkillWrapper } from './style';
import { Tabs } from 'antd';
import { frontEnd, rearEnd } from './config';
const Skill = memo(() => {
  return (
    <SkillWrapper>
      <div className="overview">
        <h2 className="title">概述：</h2>
        <div>
          1. 本项目仅用作体验 react18 + react-router v6 + reduxjs-toolkit的开发模式，
          并非完整的后台系统。如需参考较为完整的后台，请前往
          <a href="https://cms.tj520.top" target="_blank" rel="noreferrer">
            vue3-cms
          </a>
          。
        </div>

        <div>2. 本项目已完成动态路由鉴权，登录校验、token校验等难度相对较高的核心功能点。</div>
        <div>
          3. 项目内置两个本人封装的高级组件 1. TablePage、 2. FormPage
          ，均可通过配置文件一键生成表单页面。预览效果可前往
          <a href="/main/system/user">用户管理</a>
          查看。
        </div>
        <div>
          4. 仓库地址：
          <a href="https://github.com/loclink/loclink-cms" target="_blank" rel="noreferrer">
            https://github.com/loclink/loclink-cms
          </a>
        </div>
      </div>

      <div className="skill-content">
        <Tabs className="skill-tabs" defaultActiveKey="1" centered>
          <Tabs.TabPane tab="前端" key="1">
            {frontEnd.map((item) => {
              return (
                <div className="panel" key={item.title}>
                  <span>{item.title}: </span>
                  <a href="">{item.desp}</a>
                </div>
              );
            })}
          </Tabs.TabPane>
          <Tabs.TabPane tab="后端" key="2">
            {rearEnd.map((item) => {
              return (
                <div className="panel" key={item.title}>
                  <span>{item.title}: </span>
                  <a href="">{item.desp}</a>
                </div>
              );
            })}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </SkillWrapper>
  );
});

Skill.displayName = 'Skill';
export default Skill;
