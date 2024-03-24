import { configureStore } from "@reduxjs/toolkit";
import taskReduces from "./features/taskSlice";
const store = configureStore({
  reducer: {
    taskSlice: taskReduces,
  },
});
export default store;
