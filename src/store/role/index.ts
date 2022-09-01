import { createSlice } from '@reduxjs/toolkit';
import { getRoleListThunk } from './thunk';

const roleSlice = createSlice({
  name: 'role',
  initialState: {
    roleListData: { list: [], total: 0 },
    roleListSelectOption: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoleListThunk.fulfilled, (state, action) => {
      state.roleListData = action.payload.data;
    });
  }
});

export { getRoleListThunk };
export default roleSlice.reducer;
