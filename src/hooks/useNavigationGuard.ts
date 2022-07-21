import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IRootState } from '@/store/types';
import { useEffect } from 'react';

const useNavigationGuard = () => {
  const { authToken } = useSelector((state: IRootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(authToken)
    if(!authToken) navigate({pathname: '/login'})
  }, [authToken])
};

export default useNavigationGuard;
