interface IRootState {
  user: {
    authToken: '';
    userInfo: object;
    loading: false;
    menuList: [];
  };
}

export type { IRootState };
