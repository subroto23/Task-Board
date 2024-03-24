import { BsThreeDotsVertical } from "react-icons/bs";

const TaskCard = ({ task }) => {
  // const task = {
  //   id: 1,
  //   status: "pending",
  //   title: "Task-1 amar sonar Bangla ami tomai valobashi",
  //   description: "We need a remove button in our task card. ",
  //   date: "2023-08-28",
  //   assigness: "Mir Hussain",
  //   periority: "po",
  // };

  return (
    <div className="space-y-3 rounded-md text-xs px-2">
      <div className="bg-gray-300 p-3">
        <div className="border-b-2 border-gray-400 mb-3 flex justify-between">
          <h3 className="mb-2  font-medium text-justify tracking-tighter">
            {task?.title}{" "}
          </h3>
          <span className="bg-primary p-1 text-white ml-1 max-h-8">
            {task?.periority}
          </span>
        </div>
        <p className="mb-3 text-justify tracking-tighter">
          {task?.description}
        </p>
        <div className="flex justify-between my-3">
          <p className="font-medium">@{task?.assigness}</p>
          <button className="bg-primary p-1 text-white">
            <BsThreeDotsVertical />
          </button>
        </div>
        <button className="bg-primary px-4 py-1 my-2 text-white rounded-md">
          {task?.status}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
