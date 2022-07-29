interface IRootState {
  user: {
    authToken: '';
    userInfo: object;
    loading: false;
    menuList: [];
    sideMenuList: any[];
    loginStatus: boolean;
    menuCollapsed: boolean;
  };
}

export type { IRootState };
