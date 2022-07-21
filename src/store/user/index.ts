import { createSlice } from '@reduxjs/toolkit';
import { userSignInAction } from './thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    authToken: '',
    userInfo: {},
    loading: false
  },
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(userSignInAction.fulfilled, (state, action) => {
      if (action.payload.code === 200) state.authToken = action.payload.data.token;
    });
  }
});

export { userSignInAction };
export const { isLoading } = userSlice.actions;
export default userSlice.reducer;
