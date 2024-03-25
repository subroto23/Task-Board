import { useDispatch, useSelector } from "react-redux";
import Modal from "../ui/Models";
import { useForm } from "react-hook-form";
import { updateTask } from "../../redux/features/taskSlice";
import { specificIdBasedDataFound } from "../../lib/SpecificDataGenerator";

const UpdateTaskModel = ({ isOpen, setIsOpen, taskId }) => {
  const { filterData } = useSelector((state) => state.taskSlice);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const taskDatas = filterData;

  //Specific Data Getting
  const selectedData = specificIdBasedDataFound(taskDatas, taskId);

  //Close Model
  const formModelClose = () => {
    setIsOpen(false);
  };
  //Form Submit Handler
  const onSubmit = (data) => {
    //Attached id for the data
    data.id = taskId;
    //Send to the Global State for updateing
    dispatch(updateTask(data));
    //Form Close and Reset
    formModelClose();
    reset();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Update a Task">
      <div className="bg-gradient-to-r md:w-96 from-[#beabc4] via-[#e9dbfc] to-[#dfdbfc] md:p-4 p-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="font-semibold mb-2">
              Title:
            </label>
            <input
              type="text"
              className="w-full rounded-md"
              defaultValue={selectedData[0]?.title}
            />
          </div>
          {/* Description */}
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="font-semibold mb-2">
              Description
            </label>
            <textarea
              cols="10"
              className="w-full rounded-md"
              defaultValue={selectedData[0]?.description}
            ></textarea>
          </div>
          {/* Team */}
          <div className="flex flex-col mb-4">
            <label htmlFor="Team" className="font-semibold mb-2">
              Team
            </label>
            <input
              type="text"
              className="w-full rounded-md"
              defaultValue={selectedData[0]?.team}
            />
          </div>
          {/* Assignees */}
          <div className="flex flex-col mb-4">
            <label htmlFor="Team" className="font-semibold mb-2">
              Assignee
            </label>
            <input
              type="text"
              className="w-full rounded-md"
              defaultValue={selectedData[0]?.assignee}
            />
          </div>
          {/* Priority and Status */}
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            {/* Priority */}
            <div className="flex flex-row items-center mb-4 gap-1">
              <label htmlFor="Priority" className="font-semibold">
                Priority:
              </label>
              <select
                {...register("priority")}
                className="rounded-md text-center p-1 md:w-20 w-1/2"
              >
                <option disabled>Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
            </div>
            {/* Status */}
            <div className="flex flex-row items-center mb-4 gap-1">
              <label htmlFor="Priority" className="font-semibold">
                Status:
              </label>
              <select
                {...register("status")}
                className="rounded-md text-center p-1 md:w-36 w-1/2 md:ml-0 ml-2"
              >
                <option disabled>Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Deployed">Deployed</option>
                <option value="Deferred">Deferred</option>
              </select>
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-primary px-6 py-2 rounded-md text-white my-4 w-full "
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateTaskModel;
