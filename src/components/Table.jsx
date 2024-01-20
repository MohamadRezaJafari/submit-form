import { useState } from "react";
import Modal from "./Modal";

function Table({ users, numOfUsers, handleDeleteUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  if (numOfUsers > 0) {
    return (
      <div className="p-4">
        <table className="border-2 border-gray-400 w-full">
          <tr>
            <th className="bg-blue-600 text-white px-8 py-2 border-b border-black">
              ردیف
            </th>
            <th className="bg-blue-600 text-white px-8 py-2 border-b border-black">
              نام
            </th>
            <th className="bg-blue-600 text-white px-8 py-2 border-b border-black">
              نام خانوادگی
            </th>
            <th className="bg-blue-600 text-white px-8 py-2 border-b border-black">
              جزئیات
            </th>
            <th className="bg-blue-600 text-white px-8 py-2 border-b border-black">
              حذف
            </th>
          </tr>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td className="text-center border-b border-black px-4 py-2">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="text-center border-b border-black px-4 py-2">
                  {user.name}
                </td>
                <td className="text-center border-b border-black px-4 py-2">
                  {user.lastName}
                </td>
                <td
                  onClick={() => setSelectedUser(user)}
                  className="text-center border-b border-black px-4 py-2 hover:bg-slate-200 hover:cursor-pointer rounded-xl"
                >
                  <span onClick={() => setIsOpen(!isOpen)}>
                    مشاهده تمام اطلاعات
                    {isOpen === true ? (
                      <Modal
                        selectedUser={selectedUser}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                      />
                    ) : (
                      ""
                    )}
                  </span>
                </td>
                <td className="text-center border-b border-black px-4 py-2">
                  <button onClick={() => handleDeleteUser(user.id)}>✖️</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Table;
