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
        <div className="bg-gradient-to-r from-[#beabc4] via-[#e9dbfc] to-[#dfdbfc] p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center mb-4">
              <label htmlFor="title" className="font-semibold mr-12">
                Title:
              </label>
              <input type="text" {...register("title")} className="w-full" />
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="description" className="font-semibold mr-1">
                Description
              </label>
              <textarea
                {...register("description")}
                cols="10"
                className="w-full"
              ></textarea>
            </div>
            <div>
              <label htmlFor="Team">Team</label>
              <input type="text" {...register("team")} />
            </div>
            <div>
              <label htmlFor="Team">Assignees</label>
              <input type="text" {...register("assigness")} />
            </div>
            <div>
              <label htmlFor="Priority">Priority</label>
              <select
                {...register("priority")}
                className="rounded-md text-center md:w-32 p-1"
              >
                <option disabled>Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className="bg-primary px-6 rounded-md text-white my-4"
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddTaskModel;
