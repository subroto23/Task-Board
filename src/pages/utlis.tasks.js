export const generatedTaskSpecificStatus = (arryData) => {
  const newArray = arryData.reduce((acc, obj) => {
    acc[obj.status] = acc[obj.status] || [];
    acc[obj.status].push(obj);
    return acc;
  }, {});
  return newArray;
};

export const tasksData = [
  {
    id: 2,
    description: "Implement sorting functionality for tasks based on priority",
    startDate: "10-03-2024",
    endDate: "15-04-2024",
    status: "In Progress",
    assigner: "John Doe",
    priority: "p1",
  },
  {
    id: 3,
    description: "Develop notification system for task reminders",
    startDate: "12-03-2024",
    endDate: "20-04-2024",
    status: "In Progress",
    assigner: "Jane Smith",
    priority: "p1",
  },
  {
    id: 4,
    description: "Create user interface for task management dashboard",
    startDate: "08-03-2024",
    endDate: "18-04-2024",
    status: "In Progress",
    assigner: "Emily Johnson",
    priority: "p1",
  },
  {
    id: 5,
    description: "Implement task filtering by category",
    startDate: "15-03-2024",
    endDate: "25-04-2024",
    status: "In Progress",
    assigner: "Michael Brown",
    priority: "p1",
  },
  {
    id: 6,
    description: "Design task scheduling feature for better time management",
    startDate: "20-03-2024",
    endDate: "30-04-2024",
    status: "Destroyed",
    assigner: "Daniel Wilson",
    priority: "p1",
  },
  {
    id: 7,
    description: "Optimize backend for improved task performance",
    startDate: "25-03-2024",
    endDate: "05-05-2024",
    status: "In Progress",
    assigner: "Sophia Lee",
    priority: "p1",
  },
  {
    id: 8,
    description: "Integrate task collaboration features for team productivity",
    startDate: "02-04-2024",
    endDate: "10-05-2024",
    status: "In Progress",
    assigner: "David Martinez",
    priority: "p1",
  },
  {
    id: 9,
    description: "Develop reporting tools for task analytics",
    startDate: "10-04-2024",
    endDate: "15-05-2024",
    status: "Completed",
    assigner: "Olivia Taylor",
    priority: "p1",
  },
  {
    id: 10,
    description: "Create documentation for task management system",
    startDate: "18-04-2024",
    endDate: "25-05-2024",
    status: "In Progress",
    assigner: "William Clark",
    priority: "p1",
  },
  {
    id: 11,
    description: "Implement user authentication for task security",
    startDate: "22-04-2024",
    endDate: "02-06-2024",
    status: "Pending",
    assigner: "Ava White",
    priority: "p1",
  },
];
