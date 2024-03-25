import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditAndDeleteMenu from "../EditAndDeleteMenu/EditAndDeleteMenu";
const TaskCard = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState("");
  return (
    <div className="space-y-3 rounded-md text-xs px-2">
      <div className="bg-gray-300 p-3 relative">
        <div className="border-b-2 border-gray-400 mb-3 flex justify-between">
          <h3 className="mb-2  font-medium text-justify tracking-tighter">
            {task?.title}{" "}
          </h3>
          <span className="bg-primary p-1 text-white ml-1 max-h-8">
            {task?.priority}
          </span>
        </div>
        <p className="mb-3 text-justify tracking-tighter">
          {task?.description}
        </p>
        <div className="flex justify-between my-3">
          <p className="font-medium">@{task?.assignee}</p>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setTaskId(task?.id);
            }}
            className="bg-primary p-1 text-white"
          >
            <BsThreeDotsVertical />
          </button>
          {isOpen && (
            <EditAndDeleteMenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              taskId={taskId}
            />
          )}
        </div>
        <button className="bg-primary px-4 py-1 my-2 text-white rounded-md">
          {task?.status}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
