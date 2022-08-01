import { createSlice } from '@reduxjs/toolkit';
import { setCache } from '../../utils/cache';
import { getMenuListAction, getUserInfoAction, userSignInAction } from './thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loginStatus: true, // 登录状态
    authToken: '', // token
    userInfo: {}, // 当前登录用户的信息
    loading: false, // 是否处于请求加载
    menuList: [], // 当前用户拥有的菜单权限列表
    sideMenuList: [] // 侧边栏菜单数据
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

    setSideMenuList: (state, action) => {
      state.sideMenuList = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(userSignInAction.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.authToken = action.payload.data.token;
        setCache('token', state.authToken);
      }
    });

    builder.addCase(getUserInfoAction.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.userInfo = action.payload.data;
        state.loginStatus = true;
      }
    });

    builder.addCase(getMenuListAction.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.menuList = action.payload.data;
        setCache('menuList', state.menuList);
      }
    });
  }
});

export { userSignInAction, getUserInfoAction, getMenuListAction };
export const { isLoading, setAuthToken, setLoginStatus, setSideMenuList } = userSlice.actions;
export default userSlice.reducer;
