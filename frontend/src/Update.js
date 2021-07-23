import { useState } from "react";
import { useLocation, useHistory } from "react-router";
const axios = require("axios");

const Update = () => {
  const location = useLocation();
  const state = location.state;
  const history = useHistory();

  const [id, setId] = useState(state.id);
  const [firstName, setFirstName] = useState(state.firstName);
  const [lastName, setLastName] = useState(state.lastName);
  const [email, setEmail] = useState(state.email);
  const [phone, setPhone] = useState(state.contactNumber);
  const [success, setSuccess] = useState(false);

  const _id = state._id;

  const goBackHandle = () => {
    history.goBack();
  };

  const updateUser = (Id) => {
    axios.put("http://localhost:2000/api/update-user", {
      _id: Id,
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: phone,
    });
    setSuccess(true);
  };

  return (
    <div className="container mt-4">
      <div
        id={success ? "display-block" : "display-none"}
        className="my-2 text-center"
      >
        <h2 className="text-success">User Updated Succesfully!</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateUser(_id);
        }}
      >
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter ID"
            id="id"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter first name"
            id="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter last name"
            id="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter contact number"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <a onClick={goBackHandle} className="btn btn-light float-right">
          Go Back
        </a>
      </form>
    </div>
  );
};

export default Update;
