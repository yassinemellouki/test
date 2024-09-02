import useFetchUser from "../hooks/useFetchUser";
import { PropsWithChildren } from "react";
import UserDetailsCell from "../components/UserDetailsCell";

const Users = () => {
  const { data, handleUserUpdate } = useFetchUser();

  if (data) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-1 md:m-auto gap-4">
        <div className="col-span-3 max-w-full mx-auto bg-white shadow-md rounded-lg">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Employees</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <Th>Employee</Th>
                  <Th>Last login</Th>
                  <Th>Department</Th>
                  <Th>Status</Th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((user: any) => {
                  return (
                    <UserDetailsCell
                      key={user.id}
                      user={user}
                      handleUserUpdate={handleUserUpdate}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Users;

const Th = ({ children }: PropsWithChildren) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  );
};
