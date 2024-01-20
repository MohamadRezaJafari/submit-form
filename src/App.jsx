import { useState } from "react";
import "./index.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Form setUsers={setUsers} />
      <Table
        users={users}
        numOfUsers={users.length}
        handleDeleteUser={handleDeleteUser}
      />
    </>
  );
}

export default App;
