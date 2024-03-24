import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div>
      {/* Top Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl">Task Board</h1>
        {/* Profile Logo */}
        <div className="overflow-hidden bg-white rounded-full w-10 h-10 flex items-center justify-center">
          <CgProfile className="h-6 w-6 " />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
