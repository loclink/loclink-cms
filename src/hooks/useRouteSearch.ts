import { useEffect, useState } from 'react';
import { NavigateFunction, useLocation } from 'react-router-dom';
import { objectToSearch, searchToObject } from '../utils/handle-path';

// 分页hook
const useRouteSearch = (navigate: NavigateFunction, searchObj?: object) => {
  const { pathname, search } = useLocation();
  const [params, setParams] = useState({});

  useEffect(() => {
    searchObj && navigate({ search: objectToSearch(searchObj) });
    setParams(searchToObject(search));
  }, [pathname, search]);

  return params;
};

export { useRouteSearch };
