import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../redux/features/taskSlice";
import Swal from "sweetalert2";

const EditAndDeleteMenu = ({ setIsOpen, taskId }) => {
  const dispatch = useDispatch();

  //Handle Delete Task
  const handleUpdate = () => {
    dispatch(updateTask({ id: taskId, priority: "P0", status: "Completed" }));
  };

  //Handle Delete Task
  const handleDelete = () => {
    Swal.fire({
      title: "Delete Task",
      text: "Do you wish to Delete Task ?",
      width: "20rem",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        title: "text-xl font-bold",
        content: "text-xs",
        actions: "flex",
        cancelButton: "",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTask({ id: taskId }));
        setIsOpen(false);
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
          width: "20rem",
          customClass: {
            title: "text-sm font-bold",
            content: "text-xs",
          },
        });
      }
    });
  };
  return (
    <div className="bg-white rounded-md border-2 w-100 absolute shadow-md right-10 flex flex-col gap-1">
      <ul>
        <li className="hover:bg-gray-200 hover:font-bold">
          <button
            onClick={handleUpdate}
            className="border-b border-gray-300 pb-2 px-6 py-3"
          >
            Edit
          </button>
        </li>
        <li className="hover:bg-gray-200 hover:font-bold">
          <button onClick={handleDelete} className="border-b-2 pb-2 px-6 py-3">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default EditAndDeleteMenu;
