import Header from "../components/layouts/Header";
import TaskCard from "../components/tasks/TaskCard";
import FunctionalHeader from "../components/layouts/FunctionalHeader";
import { useSelector } from "react-redux";
const Tasks = () => {
  const { tasks } = useSelector((state) => state.taskSlice);
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#beabc4] via-[#e9dbfc] to-[#dfdbfc] pt-6 md:px-10 px-2 ">
      <div>
        <Header />
        <FunctionalHeader />
        {/* Main Content  section*/}
        <div className="grid md:grid-cols-5 grid-cols-1 gap-3 md:border-4 md:border-gray-400 shadow-lg rounded-3xl mt-6 md:p-6">
          {/* Pending */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#8c8b90] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold ">Pending</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              {tasks?.map((task) => {
                return <TaskCard key="hfjahjfahjah" task={task} />;
              })}
            </div>
          </div>

          {/* In Progress */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#e89924] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold ">In Progress</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              <TaskCard />
              <TaskCard />
            </div>
          </div>
          {/* Completed */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#42a81e] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold ">Completed</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              <TaskCard />
            </div>
          </div>
          {/* Deployed */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#353976] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold">Deployed</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              <TaskCard />
            </div>
          </div>
          {/* Deffered */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#f68871] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold ">Deffered</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              <TaskCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
