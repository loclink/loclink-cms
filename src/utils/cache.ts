// 存储
const setCache = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// 获取数据
const getCache = (key: string) => {
  if (localStorage.getItem(key) === 'undefined' || localStorage.getItem(key) === 'null') return;
  return JSON.parse(localStorage.getItem(key) as string);
};

export { setCache, getCache };
