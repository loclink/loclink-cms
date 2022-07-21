interface IRootState {
  user: {
    authToken: '';
    userInfo: object;
    loading: false;
  };
}
export type { IRootState };
