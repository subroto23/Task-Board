import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTasks: (state, { payload }) => {
      //Generated Date
      const day = new Date();
      const today = `${day.getMonth()}/${day.getDate()}/${day.getFullYear()}`;
      // Id Added To the Task
      payload.id = uuidv4();
      payload.startDate = today;
      payload.status = "Pending";
      state.tasks.push(payload);
    },
    deleteTask: (state, { payload }) => {
      state.tasks.filter((item) => item.id !== payload.id);
    },
  },
});
export const { addTasks, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
