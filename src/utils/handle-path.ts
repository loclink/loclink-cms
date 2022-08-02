const handleTailRemove = (message: string, symbol: string): string => {
  if (message.endsWith(symbol)) {
    return message.slice(0, message.length - 1);
  } else {
    return message;
  }
};

// 如果菜单为4级则转换为3级菜单并返回
const handleFourPath = (path: string) => {
  const finalPath = handleTailRemove(path, '/');
  const pathStrArr = finalPath.split('/');
  if (pathStrArr.length >= 5) pathStrArr.pop();
  return pathStrArr.join('/');
};
export { handleTailRemove, handleFourPath };
