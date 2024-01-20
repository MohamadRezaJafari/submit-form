function Modal({ selectedUser, setIsOpen, isOpen }) {
  return (
    <div className="">
      <div className="fixed bg-gray-200 inset-0 opacity-40"></div>
      <div className="w-1/3 h-1/4 absolute top-1/4 right-1/3 bg-slate-300 rounded-2xl flex items-center justify-between p-4 ring ring-blue-500">
        <button onClick={() => setIsOpen(!isOpen)} className="w-8 h-8">
          ✖️
        </button>
        <p className="p-2 bg-gray-200 border border-slate-400 rounded-lgc">
          جنسیت : {selectedUser.sex}
        </p>
        <p className="p-2 bg-gray-200 border border-slate-400 rounded-lg">
          شماره تماس : {selectedUser.phoneNumber}
        </p>
        <p className="p-2 bg-gray-200 border border-slate-400 rounded-lg">
          ایمیل : {selectedUser.email}
        </p>
      </div>
    </div>
  );
}

export default Modal;
