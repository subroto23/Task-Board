export const specificIdBasedDataFound = (array, id) => {
  const specificData = array?.filter((task) => task.id === id);
  return specificData;
};

export const statusBasedDataArrays = (arry, status) => {
  const statsDatas = arry?.filter((item) => item.status === status);
  return statsDatas;
};

export const withoutIdBasedTasks = (array, id) => {
  const deletedTask = array?.filter((item) => item.id !== id);
  return deletedTask;
};
