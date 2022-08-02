import { AnyObject } from 'immer/dist/internal';

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

// 对象转search
const objectToSearch = (searchObj: object) => {
  const queryParams = new URLSearchParams();
  Object.entries(searchObj).forEach(([key, value]) => {
    queryParams.append(key, value);
  });
  return `?${queryParams.toString()}`;
};

// search转对象
const searchToObject = (searchStr: string) => {
  const newSearch = searchStr.slice(1);
  const params: AnyObject = {};
  newSearch.split('&').forEach((item) => {
    params[item.split('=')[0]] = item.split('=')[1];
  });
  return params
};

export { handleTailRemove, handleFourPath, objectToSearch, searchToObject };
