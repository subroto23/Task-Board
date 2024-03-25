import { useEffect, useState } from "react";
import {
  allTasks,
  assignerByFilter,
  dateBasedFilter,
  priorityBasedSort,
  priorityByFilter,
} from "../../redux/features/taskSlice";
import { useDispatch } from "react-redux";
import AddTaskModel from "../TaskForm/AddTaskModel";

const FunctionalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();

  //Filter By Assigner Name
  const handleAssigneerFilter = (data) => {
    data
      ? dispatch(assignerByFilter({ assignee: data }))
      : dispatch(allTasks());
  };
  //Filter By Priority
  const handleSelectPriority = (data) => {
    data
      ? dispatch(priorityByFilter({ priority: data }))
      : dispatch(allTasks());
  };

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
      {/* Sort And Filted Section */}
      <div className="my-6 flex justify-between items-center flex-wrap">
        <div className="flex gap-3 flex-wrap">
          <div>
            <label htmlFor="filtered" className="font-medium">
              Filter By:{" "}
            </label>
            <input
              onChange={(e) => handleAssigneerFilter(e.target.value)}
              type="font-medium "
              className="rounded-md text-center font-medium w-32 ml-6 p-1 border-0"
              placeholder="Assigner name"
            />
          </div>
          {/* Priority Selection */}
          <div>
            <select
              onChange={(e) => handleSelectPriority(e.target.value)}
              className="rounded-md text-center md:w-32 p-1 border-0"
            >
              <option value="">Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          {/* Date Select */}
          <div>
            {/* Start Date */}
            <input
              type="date"
              className="text-center font-medium p-1 pr-0 border-0"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="px-2">to</span>
            {/* End Date */}
            <input
              type="date"
              name=""
              className="text-center font-medium p-1 border-0 pl-0"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        {/* Sencond Child */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary px-3 py-2 text-white rounded-md"
        >
          Add New Task
        </button>
      </div>
      {/* Sort By */}
      <div>
        <label htmlFor="filtered" className="font-medium">
          Sort By:{" "}
        </label>
        <select
          onChange={(e) => handleSortByPirority(e.target.value)}
          className="rounded-md text-center md:w-32 p-1 ml-6 border-0"
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
