const handleCurrentOpenMenu = (menus: any[], path: string) => {
 return menus.find((item) => {
    return path.includes(item.key);
  });
};
export { handleCurrentOpenMenu };
