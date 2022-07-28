interface IRootState {
  user: {
    authToken: '';
    userInfo: object;
    loading: false;
    menuList: [];
    loginStatus: boolean;
  };
}

export type { IRootState };
