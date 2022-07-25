import { createSlice } from '@reduxjs/toolkit';
import { setCache } from '../../utils/cache';
import { getMenuListAction, getUserInfoAction, userSignInAction } from './thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    authToken: '',
    userInfo: {},
    loading: false,
    menuList: [],
    authStatus: false
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

    // switch auth status
    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
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
      if (action.payload.code === 200) state.userInfo = action.payload.data;
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
export const { isLoading, setAuthToken, setAuthStatus } = userSlice.actions;
export default userSlice.reducer;
