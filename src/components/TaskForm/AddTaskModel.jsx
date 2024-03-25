import { useDispatch } from "react-redux";
import Modal from "../ui/Models";
import { useForm } from "react-hook-form";
import { addTasks } from "../../redux/features/taskSlice";

const AddTaskModel = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const formModelClose = () => {
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    //Send to the Global State
    dispatch(addTasks(data));
    //Form Close and Reset
    formModelClose();
    reset();
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"CREATE A TASK"}>
        <div className="bg-gradient-to-r from-[#beabc4] via-[#e9dbfc] to-[#dfdbfc] md:p-4 p-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <div className="flex md:flex-row flex-col md:items-center mb-4">
              <label htmlFor="title" className="font-semibold mb-2">
                Title:
              </label>
              <input
                type="text"
                {...register("title")}
                className="w-full rounded-md md:ml-[72px]"
              />
            </div>
            {/* Description */}
            <div className="flex md:flex-row flex-col md:items-center mb-4">
              <label htmlFor="description" className="font-semibold mb-2">
                Description
              </label>
              <textarea
                {...register("description")}
                cols="10"
                className="w-full rounded-md"
              ></textarea>
            </div>
            {/* Team */}
            <div className="flex md:flex-row flex-col md:items-center mb-4">
              <label htmlFor="Team" className="font-semibold mb-2">
                Team
              </label>
              <input
                type="text"
                {...register("team")}
                className="w-full rounded-md md:ml-[66px]"
              />
            </div>
            {/* Assignees */}
            <div className="flex md:flex-row flex-col md:items-center mb-4">
              <label htmlFor="Team" className="font-semibold mb-2">
                Assignee
              </label>
              <input
                type="text"
                {...register("assignee")}
                className="w-full rounded-md md:ml-4"
              />
            </div>
            {/* Priority */}
            <div className="flex flex-row md:items-center mb-4 gap-4">
              <label htmlFor="Priority" className="font-semibold mb-2">
                Priority:
              </label>
              <select
                {...register("priority")}
                className="rounded-md text-center p-1 w-full md:ml-2"
              >
                <option disabled>Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
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
    </div>
  );
};

export default AddTaskModel;
