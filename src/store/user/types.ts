interface IUser {
  authToken: '';
  userInfo: object;
  loading: false;
  menuList: [];
  sideMenuList: any[];
  loginStatus: boolean;
  userListData: any[]
}

export type { IUser };
