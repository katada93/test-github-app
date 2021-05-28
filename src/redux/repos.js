import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    repos: [],
    currentPage: 1,
    loading: false,
  },
  reducers: {
    setRepos: (state, action) => {
      state.repos = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setRepos, setLoading, changeCurrentPage } = reposSlice.actions;

export const fetchRepos = (user, page) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${user}/repos?per_page=4&page=${page}`
    );
    dispatch(setRepos(data));
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
  }
};

export default reposSlice.reducer;
