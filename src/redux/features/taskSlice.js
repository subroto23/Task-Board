import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  specificIdBasedDataFound,
  withoutIdBasedTasks,
} from "../../lib/SpecificDataGenerator";
import { initialState } from "../ConstantsInitialValue";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: initialState,
  reducers: {
    // Add Tasks
    addTasks: (state, { payload }) => {
      //Generated Date
      const day = new Date();
      const today = `${day.getMonth()}/${day.getDate()}/${day.getFullYear()}`;
      // Id Added To the Task
      payload.id = uuidv4();
      payload.startDate = today;
      payload.status = "Pending";
      state.tasks.push(payload);
      state.filterData = state.tasks;
    },

    //Update Task
    updateTask: (state, { payload }) => {
      const { priority, status, id } = payload;
      //select from Tasks
      const selectedTask = specificIdBasedDataFound(state.tasks, id);
      //If status is Completed Then assign End Date
      const date = new Date();
      const endDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}}`;
      if (status == "Completed") {
        selectedTask[0].endDate = endDate;
      }
      //Update Properties
      selectedTask[0].priority = priority;
      selectedTask[0].status = status;

      //Set Value
      state.filterData = state.tasks;
    },

    //Delete Task
    deleteTask: (state, { payload }) => {
      const { id } = payload;
      //Remove from filterData Tasks
      state.filterData = withoutIdBasedTasks(state.tasks, id);
      //Remove form Orginal Task
      state.tasks = withoutIdBasedTasks(state.tasks, id);
    },

    //All Tasks Data
    allTasks: (state) => {
      state.filterData = state.tasks.sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      );
    },

    //Assigneer Based Filter
    assignerByFilter: (state, { payload }) => {
      state.filterData = state.tasks?.filter(
        (item) => item.assignee.toLowerCase() == payload.assignee.toLowerCase()
      );
    },

    //Priorithy Based Filter
    priorityByFilter: (state, { payload }) => {
      state.filterData = state.tasks?.filter(
        (item) => item.priority == payload.priority
      );
    },

    //Assigneer and Priority Based Filter
    multipuleValueBasedFilter: (state, { payload }) => {
      const { assignee, priority } = payload;
      state.filterData = state.tasks?.filter(
        (item) =>
          item.priority == priority &&
          item.assignee.toLowerCase() == assignee.toLowerCase()
      );
    },

    //Date Based Filtering
    dateBasedFilter: (state, { payload }) => {
      const quearyData = state.tasks?.filter((item) => {
        const taskStartDate = new Date(item.startDate);
        const queatyStartDate = new Date(payload.startDate);
        const quearyEndDate = new Date(payload.endDate);
        return (
          taskStartDate >= queatyStartDate && taskStartDate <= quearyEndDate
        );
      });
      state.filterData = quearyData;
    },

    //Sort by priority
    priorityBasedSort: (state, { payload }) => {
      const priorityOrder = {
        P0: 0,
        P1: 1,
        P2: 2,
        [payload]: -1,
      };
      state.filterData = state.tasks?.sort((a, b) => {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    },
  },
});
export const {
  addTasks,
  updateTask,
  deleteTask,
  allTasks,
  assignerByFilter,
  priorityByFilter,
  multipuleValueBasedFilter,
  dateBasedFilter,
  priorityBasedSort,
} = taskSlice.actions;
export default taskSlice.reducer;
