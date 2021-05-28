import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    pageCount: 0,
    error: false,
    loading: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      state.pageCount = Math.ceil(action.payload.public_repos / 4);
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { setUserData, setLoading, setError } = userSlice.actions;

export const fetchUserData = (value) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(false));
  try {
    const { data } = await axios.get(`https://api.github.com/users/${value}`);
    dispatch(setUserData(data));
  } catch (error) {
    console.log(error.message);
    dispatch(setLoading(false));
    dispatch(setError(true));
  }
};

export default userSlice.reducer;
