import { memo } from "react";
import { UserType } from "../state/slices/usersSlice";

const UserDetailsCell = memo(
  ({
    user,
    handleUserUpdate,
  }: {
    user: UserType;
    handleUserUpdate?: ({ id }: { id: string }) => void;
  }) => {
    const className = "px-6 py-4 whitespace-nowrap";

    return (
      <tr>
        <td className={className + " flex"}>
          <img
            className="h-10 min-h-10 min-w-10  w-10 rounded-full object-cover"
            src={user.avatar}
            alt={user.name}
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </td>
        <td className={className}>
          <div className="text-sm text-gray-900">{user.lastLoginDay}</div>
          <div className="text-sm text-gray-500">{user.lastLoginMessage}</div>
        </td>
        <td className={className}>
          <div className="text-sm text-gray-900">{user.department}</div>
        </td>
        <td className={className}>
          <span className={user.statusStyle}>
            {user.isActive ? "active" : "inactive"}
          </span>
        </td>
        {handleUserUpdate && (
          <td className={className}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-lg text-xs"
              onClick={() => handleUserUpdate({ id: String(user.id) })}
            >
              Update
            </button>
          </td>
        )}
      </tr>
    );
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  }
);

export default UserDetailsCell;
