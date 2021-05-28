import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import reposSlice from "./repos";

export default configureStore({
  reducer: {
    user: userSlice,
    repos: reposSlice
  }
});
