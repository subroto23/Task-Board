import Header from "../components/layouts/Header";
import TaskCard from "../components/tasks/TaskCard";
import FunctionalHeader from "../components/layouts/FunctionalHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allTasks } from "../redux/features/taskSlice";
const Tasks = () => {
  const { filterData } = useSelector((state) => state.taskSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allTasks());
  }, [dispatch]);

  const pendingData = filterData?.filter((item) => item.status === "Pending");
  const inProgressData = filterData.filter(
    (item) => item.status === "In Progress"
  );
  const completedData = filterData.filter(
    (item) => item.status === "Completed"
  );
  const deployedData = filterData.filter((item) => item.status === "Deployed");
  const defferedData = filterData.filter((item) => item.status === "Deferred");
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#beabc4] via-[#e9dbfc] to-[#dfdbfc] pt-6 md:px-10 px-2 ">
      <div>
        <Header />
        <FunctionalHeader />
        {/* Main Content  section*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1 gap-3 md:border-4 md:border-gray-400 shadow-lg rounded-3xl mt-6 md:p-6">
          {/* Pending */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#8c8b90] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold ">Pending</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              {pendingData?.map((task) => {
                return <TaskCard key={Math.random()} task={task} />;
              })}
            </div>
          </div>

          {/* In Progress */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#e89924] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold ">In Progress</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              {inProgressData?.map((task) => {
                return <TaskCard key={Math.random()} task={task} />;
              })}
            </div>
          </div>
          {/* Completed */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#42a81e] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold ">Completed</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              {completedData?.map((task) => {
                return <TaskCard key={Math.random()} task={task} />;
              })}
            </div>
          </div>
          {/* Deployed */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#353976] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold">Deployed</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              {deployedData?.map((task) => {
                return <TaskCard key={Math.random()} task={task} />;
              })}
            </div>
          </div>
          {/* Deffered */}
          <div className="relative overflow-auto">
            <div className="text-center bg-[#f68871] p-2 rounded-tl-xl rounded-tr-xl">
              <h1 className="text-white font-bold ">Deferred</h1>
            </div>
            <div className="space-y-3 bg-gray-200 rounded-md  py-3">
              {defferedData?.map((task) => {
                return <TaskCard key={Math.random()} task={task} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
