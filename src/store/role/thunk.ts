import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRoleList } from '../../service/role';

const getRoleListThunk = createAsyncThunk('role/list', async () => {
  const result = await getRoleList();
  return result;
});

export { getRoleListThunk };
