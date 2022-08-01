import { createSlice } from '@reduxjs/toolkit';
import { setCache } from '../../utils/cache';
import { getMenuListAction, getUserInfoAction, getUserListAction, userSignInAction } from './thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loginStatus: true, // 登录状态
    authToken: '', // token
    userInfo: {}, // 当前登录用户的信息
    loading: false, // 是否处于请求加载
    menuList: [], // 当前用户拥有的菜单权限列表
    sideMenuList: [], // 侧边栏菜单数据
    userListData: [] // 用户列表数据
  },

  reducers: {
    // 修改loading状态
    isLoading: (state, action) => {
      state.loading = action.payload;
    },

    // 设置token
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },

    // 修改login状态
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload;
    },

    // 设置侧边栏菜单数据
    setSideMenuList: (state, action) => {
      state.sideMenuList = action.payload;
    }
  },

  // 提交用户登录校验后的token数据
  extraReducers: (builder) => {
    builder.addCase(userSignInAction.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.authToken = action.payload.data.token;
        setCache('token', state.authToken);
      }
    });

    // 提交用户信息数据
    builder.addCase(getUserInfoAction.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.userInfo = action.payload.data;
        state.loginStatus = true;
      }
    });

    // 提价用户菜单数据
    builder.addCase(getMenuListAction.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.menuList = action.payload.data;
        setCache('menuList', state.menuList);
      }
    });

    // 提交用户列表数据
    builder.addCase(getUserListAction.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.userListData = action.payload.data;
      }
    });
  }
});

export { userSignInAction, getUserInfoAction, getMenuListAction, getUserListAction };
export const { isLoading, setAuthToken, setLoginStatus, setSideMenuList } = userSlice.actions;
export default userSlice.reducer;
