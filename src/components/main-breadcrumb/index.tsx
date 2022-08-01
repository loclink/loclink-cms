import React, { memo, useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { MainBreadcrumbWrapper } from './style';
import { handleBreadcrumb } from '../../utils/menu-map';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/types';
import { handleTailRemove } from '../../utils/handle-path';
const MainBreadcrumb = memo(() => {
  const { pathname } = useLocation();
  const { sideMenuList } = useSelector((state: IRootState) => state.user);
  const [breadcrumb, setBreadcrumb] = useState<any[]>([]);
  useEffect(() => {
    if (!sideMenuList.length) return;
    setBreadcrumb(handleBreadcrumb(handleTailRemove(pathname, '/'), sideMenuList));
  }, [sideMenuList]);
  return (
    <MainBreadcrumbWrapper>
      <Breadcrumb>
        {breadcrumb.map((item) => {
          return <Breadcrumb.Item key={item.key}>{item.label}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
    </MainBreadcrumbWrapper>
  );
});
MainBreadcrumb.displayName = 'MainBreadcrumb';
export default MainBreadcrumb;
