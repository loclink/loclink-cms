// 当前已打开的菜单
const handleCurrentOpenMenu = (menus: any[], path: string) => {
  return menus.find((item) => {
    return path.includes(item.key);
  });
};

// 返回当前路径的面包屑数据
const handleBreadcrumb = (currentPath: string, menuList: any[]) => {
  const currentMenus = handleCurrentOpenMenu(menuList, currentPath);
  if (!currentMenus) return [];

  const currentChildrenMenu = currentMenus.children.find((item: any) => {
    if (item.key === currentPath) return item;
  });

  return [currentMenus, currentChildrenMenu];
};

export { handleCurrentOpenMenu, handleBreadcrumb };
