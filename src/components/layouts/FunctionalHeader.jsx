import { useEffect, useState } from "react";
import {
  allTasks,
  assignerByFilter,
  dateBasedFilter,
  multipuleValueBasedFilter,
  priorityBasedSort,
  priorityByFilter,
} from "../../redux/features/taskSlice";
import { useDispatch } from "react-redux";
import AddTaskModel from "../TaskForm/AddTaskModel";

const FunctionalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priorityValue, setPriorityValue] = useState("");
  const [assigneerValue, setAssigneerValue] = useState("");

  const dispatch = useDispatch();

  //Filter By Assigner Name
  const handleAssigneerFilter = (data) => {
    setAssigneerValue(data);
    data
      ? dispatch(assignerByFilter({ assignee: data }))
      : dispatch(allTasks());
  };
  //Filter By Priority
  const handleSelectPriority = (data) => {
    setPriorityValue(data);
    data
      ? dispatch(priorityByFilter({ priority: data }))
      : dispatch(allTasks());
  };

  //handle Multiple Filters at a time
  useEffect(() => {
    if (assigneerValue && priorityValue) {
      dispatch(
        multipuleValueBasedFilter({
          assignee: assigneerValue,
          priority: priorityValue,
        })
      );
    }
  }, [assigneerValue, priorityValue, dispatch]);

  //Filted By Start and End Date
  useEffect(() => {
    startDate && endDate
      ? dispatch(dateBasedFilter({ startDate, endDate }))
      : dispatch(allTasks());
  }, [startDate, endDate, dispatch]);

  //Sort by Periority
  const handleSortByPirority = (data) => {
    data ? dispatch(priorityBasedSort(data)) : dispatch(allTasks());
  };
  return (
    <div>
      <AddTaskModel isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="my-6 flex lg:flex-row flex-col lg:justify-between lg:items-center">
        {/* First Children div */}
        <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center gap-2">
          {/* Assigner Name And Priority parent div */}
          <span className="font-semibold">Filter:</span>
          <input
            onChange={(e) => handleAssigneerFilter(e.target.value)}
            type="text"
            className="rounded-md text-center"
            placeholder="assigner"
          />
          {/* Priority Selection */}
          <select
            onChange={(e) => handleSelectPriority(e.target.value)}
            className="rounded-md text-center lg:w-full"
          >
            <option value="">Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>

          {/* Date Selection parent Div*/}
          <div className="flex lg:flex-row flex-col lg:justify-center lg:items-center">
            <input
              type="date"
              className="text-center rounded-md"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="text-center font-bold px-2">to</span>
            <input
              type="date"
              name=""
              className="text-center rounded-md"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {/* Sencond Child */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-white rounded-md md:px-6 py-2 md:mt-0 mt-3"
        >
          Add New Task
        </button>
      </div>
      {/* Sort By Task*/}
      <div className="md:block hidden">
        <label htmlFor="filtered" className="font-medium">
          Sort:
        </label>
        <select
          onChange={(e) => handleSortByPirority(e.target.value)}
          className="rounded-md text-center md:w-48 p-1 ml-4 border-0"
        >
          <option value="">Priority</option>
          <option value="P0">p0</option>
          <option value="P1">p1</option>
          <option value="P2">p2</option>
        </select>
      </div>
    </div>
  );
};

export default FunctionalHeader;
