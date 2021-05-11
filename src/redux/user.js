import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    repos: [],
    reposCount: 0,
    activePage: 1,
    error: false,
    loading: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      state.reposCount = Math.floor(action.payload.public_repos / 4);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    setRepos: (state, action) => {
      state.repos = action.payload;
    },
    changeActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const {
  setUserData,
  setLoading,
  setError,
  setRepos,
  changeActivePage,
} = userSlice.actions;

export default userSlice.reducer;
