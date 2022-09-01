import { createSlice } from '@reduxjs/toolkit';
import { setCache } from '@/utils/cache';
import { getMenuListThunk, getUserInfoThunk, getUserListThunk, userSignInThunk, userSignUpThunk } from './thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loginStatus: true, // 登录状态
    authToken: '', // token
    userInfo: {}, // 当前登录用户的信息
    loading: false, // 是否处于请求加载
    menuList: [], // 当前用户拥有的菜单权限列表
    sideMenuList: [], // 侧边栏菜单数据
    userListData: { total: 0, list: [] } // 用户列表数据
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

  // 异步reducer 放于此管理
  extraReducers: (builder) => {
    // 提交用户登录校验后的token数据
    builder.addCase(userSignInThunk.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.authToken = action.payload.data.token;
        setCache('token', state.authToken);
      }
    });

    // 用户注册
    builder.addCase(userSignUpThunk.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        return;
      }
    });

    // 提交用户信息数据
    builder.addCase(getUserInfoThunk.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.userInfo = action.payload.data;
        state.loginStatus = true;
      }
    });

    // 提交用户菜单数据
    builder.addCase(getMenuListThunk.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.menuList = action.payload.data;
        setCache('menuList', state.menuList);
      }
    });

    // 提交用户列表数据
    builder.addCase(getUserListThunk.fulfilled, (state, action) => {
      if (action.payload.code === 200) {
        state.userListData = action.payload.data;
      }
    });
  }
});

export { userSignInThunk, getUserInfoThunk, getMenuListThunk, getUserListThunk };
export const { isLoading, setAuthToken, setLoginStatus, setSideMenuList } = userSlice.actions;
export default userSlice.reducer;
