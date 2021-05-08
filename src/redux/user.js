import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    repos: [],
    error: false,
    loading: true,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setUserData, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
