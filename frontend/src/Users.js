import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

const Users = () => {
  const [users, setUsers] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:2000/api/users").then((res) => {
      setUsers(res.data.users);
      setLength(users.length);
    });
  }, [length]);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:2000/api/delete/${id}`);
    setLength(length - 1);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Users</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <table className="table mt-4">
            <thead className="text-center">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.id}</td>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/user-info",
                        state: {
                          id: user.id,
                          email: user.email,
                          firstName: user.firstName,
                          lastName: user.lastName,
                          contactNumber: user.contactNumber,
                        },
                      }}
                    >
                      <i id="view" className="fas fa-eye mx-2"></i>
                    </Link>
                    <Link
                      to={{
                        pathname: "/create-update",
                        state: {
                          _id: user._id,
                          id: user.id,
                          email: user.email,
                          firstName: user.firstName,
                          lastName: user.lastName,
                          contactNumber: user.contactNumber,
                          update: true,
                        },
                      }}
                    >
                      <i className="fas fa-edit mx-2"></i>
                    </Link>
                    <Link
                      to="/"
                      onClick={() => {
                        deleteUser(user._id);
                      }}
                    >
                      <i id="delete" className="fas fa-trash-alt mx-2"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
