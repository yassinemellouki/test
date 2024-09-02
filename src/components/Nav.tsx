import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between bg-blue-600 p-4 mb-4">
      <div className="flex items-center space-x-8">
        <div>
          <Link
            to="/"
            className="w-12 h-12 bg-white flex items-center justify-center"
          >
            <img
              src={require("../assets/images/qalqul.png")}
              alt="Logo"
              className="h-10 min-h-10 min-w-10 w-10 object-cover rounded-full"
            />
          </Link>
        </div>
        <nav className="flex space-x-8 text-white">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "font-bold border-b-2 border-gray-100 hover:text-gray-200"
                : "hover:text-gray-200"
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? "font-bold border-b-2 border-gray-100 hover:text-gray-200"
                : "hover:text-gray-200"
            }
          >
            Tasks
          </NavLink>
        </nav>
      </div>

      <div className="relative">
        <img
          onClick={() => setShowMenu(!showMenu)}
          src="https://avatar.iran.liara.run/public?username=Yassine"
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        <div
          className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            My Profile
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 text-red-600 hover:bg-red-100"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
