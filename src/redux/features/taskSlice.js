import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: "abc123",
      title: "Design Landing Page",
      description: "Create wireframes and design mockups for the landing page.",
      startDate: "2024-04-02",
      endDate: null,
      status: "Pending",
      assignee: "John Doe",
      team: "abc",
      priority: "P1",
    },
    {
      id: "abc1234",
      title: "Design Landing Page",
      description: "Create wireframes and design mockups for the landing page.",
      startDate: "2024-04-02",
      endDate: null,
      status: "Pending",
      assignee: "John Doe",
      team: "Falcon",
      priority: "P0",
    },
    {
      id: "abc12345",
      title: "Develop User Authentication",
      description: "Implement user authentication system using JWT.",
      startDate: "2024-03-24",
      endDate: null,
      status: "In Progress",
      assignee: "Jane Smith",
      team: "WebMaster",
      priority: "P0",
    },
    {
      id: "abc123456",
      title: "Fix Bug in Dashboard",
      description: "Resolve issue with data not loading.",
      startDate: "2024-04-22",
      endDate: "2024-03-25",
      status: "Completed",
      assignee: "Chris Johnson",
      team: "Coder",
      priority: "P2",
    },
    {
      id: "abc1234567",
      title: "Update API Documentation",
      description: "Update Swagger documentation to reflect changes.",
      startDate: "2024-03-18",
      endDate: null,
      status: "Deferred",
      assignee: "Emily Brown",
      team: "Web Coder",
      priority: "P1",
    },
    {
      id: "abc123456789",
      title: "Deploy Backend Service",
      description: "Deploy backend to the vercel.",
      startDate: "2024-05-23",
      endDate: null,
      status: "Deployed",
      assignee: "Michael",
      team: "React Master",
      priority: "P0",
    },
  ],
  filterData: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
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
      console.log(payload);
      //select from Tasks
      const selectedTask = state.tasks.filter((item) => item.id === id);

      //Update Properties
      selectedTask[0].priority = priority;
      selectedTask[0].status = status;
      //Set Value
      state.filterData = state.tasks;
    },

    //Delete Task
    deleteTask: (state, { payload }) => {
      //Remove from filterData Tasks
      state.filterData = state.tasks.filter((item) => item.id !== payload.id);
      //Remove form Orginal Task
      state.tasks = state.tasks.filter((item) => item.id !== payload.id);
    },

    //All Tasks Data
    allTasks: (state) => {
      state.filterData = state.tasks;
    },

    //Assigneer Based Filter
    assignerByFilter: (state, { payload }) => {
      state.filterData = state.tasks?.filter(
        (item) => item.assignee.toLowerCase() == payload.assignee.toLowerCase()
      );
    },

    //Assigneer Based Filter
    priorityByFilter: (state, { payload }) => {
      state.filterData = state.tasks?.filter(
        (item) => item.priority == payload.priority
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
  dateBasedFilter,
  priorityBasedSort,
} = taskSlice.actions;
export default taskSlice.reducer;
