import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-[#1e1f26] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div></div>
        <div className=" mx-4">
          <div className="relative">
            <input
              type="text"
              className="w-full text-slate-200 px-4 py-2  border-2 border-slate-400 rounded-full focus:outline-none bg-[#1a2232]"
              placeholder="Search anything ..."
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-3 py-1 rounded-full">
              <IoIosSearch className="text-slate-400" />
            </button>
          </div>
        </div>
        <div className="text-white text-xl flex items-center gap-5 font-semibold">
          <div className="relative">
            <FaRegBell className="text-3xl" />
            <span className="bg-green-500 text-sm rounded-full p-[0.1rem] absolute top-[-10px] right-0">1</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="rounded-full w-12 h-12" src="https://picsum.photos/200" alt="" />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
