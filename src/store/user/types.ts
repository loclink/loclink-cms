interface IUser {
  authToken: '';
  userInfo: object;
  loading: false;
  menuList: [];
  sideMenuList: any[];
  loginStatus: boolean;
}

export type { IUser };
