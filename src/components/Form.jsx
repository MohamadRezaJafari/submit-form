import { useState } from "react";

function Form({ setUsers }) {
  const [sex, setSex] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !lastName || !phoneNumber || !email || !sex) return;
    const newUser = {
      name,
      lastName,
      phoneNumber,
      email,
      sex,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <div className="p-4">
      <form
        className="border border-gray-400 p-4 flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <label className="text-lg">نام</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="border p-2  border-gray-300 rounded"
          type="text"
        />
        <label className="text-lg">نام خانوادگی</label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          className="border p-2  border-gray-300 rounded"
          type="text"
        />
        <label htmlFor="">جنسیت :</label>
        <select
          name="sexInfo"
          id="sex"
          className="p-3 rounded border border-gray-300"
          value={sex}
          onChange={(event) => setSex(event.target.value)}
        >
          <option>انتخاب</option>
          <option value="مرد">مرد 👨🏻</option>
          <option value="زن">زن 👩🏻</option>
        </select>
        <label className="text-lg">شماره تماس :</label>
        <input
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          className="border p-2  border-gray-300 rounded"
          placeholder="09121234567"
          type="number"
        />
        <label className="text-lg"> ایمیل :</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border p-2  border-gray-300 rounded"
          placeholder="user@test.com"
          type="email"
        />
        <button className="py-2 px-3 bg-blue-600 border border-slate-300 rounded-md text-white">
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
}

export default Form;
