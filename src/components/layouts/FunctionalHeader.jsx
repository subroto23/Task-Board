import { useState } from "react";
import AddTaskModel from "../tasks/AddTaskModel";

const FunctionalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <AddTaskModel isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Sort And Filted Section */}
      <div className="my-6 flex justify-between items-center flex-wrap">
        <div className="flex gap-6 flex-wrap">
          <div>
            <label htmlFor="filtered" className="font-medium">
              Filter By:{" "}
            </label>
            <input
              type="font-medium "
              className="rounded-md text-center font-medium w-32 ml-6 p-1"
              placeholder="Assigner name"
            />
          </div>
          {/* Priority Selection */}
          <div>
            <select name="" className="rounded-md text-center md:w-32 p-1">
              <option value="p0">Priority</option>
              <option value="p0">p0</option>
              <option value="p1">p1</option>
              <option value="p2">p2</option>
            </select>
          </div>
          {/* Date Select */}
          <div>
            <input
              type="date"
              name=""
              className="rounded-md text-center font-medium p-1 px-6"
            />
          </div>
        </div>
        {/* Sencond Child */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary px-12 py-2 text-white rounded-md"
        >
          Add New Task
        </button>
      </div>
      {/* Sort By */}
      <div>
        <label htmlFor="filtered" className="font-medium">
          Sort By:{" "}
        </label>
        <select name="" className="rounded-md text-center md:w-32 p-1 ml-6">
          <option value="p0">Priority</option>
          <option value="p0">p0</option>
          <option value="p1">p1</option>
          <option value="p2">p2</option>
        </select>
      </div>
    </div>
  );
};

export default FunctionalHeader;
