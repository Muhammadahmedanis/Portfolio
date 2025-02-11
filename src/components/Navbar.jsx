import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about"},
    { name: "Service", id: "service"},
    { name: "Contact", id: "contact" },
  ];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full bg-[#b6b6ef] sticky top-0 z-10 drop-shadow-md">
      <div className="flex justify-between items-center px-5 py-3 dark:bg-gray-900 dark:text-white">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-[40px] w-[60px]" />
        </div>

        <div className="sm:hidden">
          {isOpen ? (
            <FaTimes className="text-xl cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars className="text-xl cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>

        {/* Right: Desktop Navigation */}
        <div className="hidden sm:flex items-center">
          <ul className="flex font-semibold text-[15px]">
            {navItems.map((nav) => (
              <a
              href={`#${nav.id}`}
                key={nav.name}
                className="px-4 py-2 relative group block text-gray-100 cursor-pointer rounded-lg dark:text-gray-200 md:mx-2"
              >
                {nav.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-blue-800 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-blue-800 transition-all duration-500 group-hover:w-full group-hover:right-0"></span>
              </a>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <div className="relative w-14 cursor-pointer ml-5" onClick={handleCheckboxChange}>
            <div className={`block h-8 w-14 rounded-full transition ${isChecked ? "bg-blue-500" : "bg-[#E5E7EB]"}`}></div>
            <div
              className={`absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition transform ${
                isChecked ? "translate-x-6" : "translate-x-1"
              }`}
            >
              {isChecked ? <IoMoonSharp className="text-blue-500" /> : <MdOutlineWbSunny className="text-yellow-500" />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Collapsible) */}
      <div
        className={`sm:hidden flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="w-full ps-4">
          {navItems.map((nav) => (
            <li key={nav.name} className="py-2 text-gray-100 dark:text-gray-200 border-b border-gray-400">
              {nav.name}
            </li>
          ))}
            <div className="relative w-14 cursor-pointer mt-1" onClick={handleCheckboxChange}>
            <div className={`block h-8 w-14 rounded-full transition ${isChecked ? "bg-blue-500" : "bg-[#E5E7EB]"}`}></div>
            <div
              className={`absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition transform ${
                isChecked ? "translate-x-6" : "translate-x-1"
              }`}
            >
              {isChecked ? <IoMoonSharp className="text-blue-500" /> : <MdOutlineWbSunny className="text-yellow-500" />}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
