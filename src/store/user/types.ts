interface IUser {
  authToken: '';
  userInfo: object;
  loading: false;
  menuList: [];
  sideMenuList: any[];
  loginStatus: boolean;
  userListData: {
    total: number;
    list: any[];
  };
}

export type { IUser };
