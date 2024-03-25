export const specificIdBasedDataFound = (array, id) => {
  const specificData = array?.filter((task) => task.id === id);
  return specificData;
};

export const statusBasedDataArrays = (arry, status) => {
  const startsData = arry?.filter((item) => item.status === status);
  return startsData;
};

export const withoutIdBasedTasks = (array, id) => {
  const deletedTask = array?.filter((item) => item.id !== id);
  return deletedTask;
};
