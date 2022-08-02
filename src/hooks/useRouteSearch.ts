import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { objectToSearch, searchToObject } from '../utils/handle-path';

// 分页hook
const useRouteSearch = (searchObj: object) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const [params, setParams] = useState({});

  useEffect(() => {
    navigate({ search: objectToSearch(searchObj) });
    setParams(searchToObject(search));
  }, [pathname, search]);

  return params;
};

export { useRouteSearch };
