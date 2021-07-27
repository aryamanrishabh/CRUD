import { useState } from "react";
import { useHistory, useLocation } from "react-router";
const axios = require("axios");

const Form = () => {
  const history = useHistory();
  const location = useLocation();
  const state = location.state;

  const update = state ? true : false;

  const [successUpdate, setSuccessUpdate] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [id, setId] = useState(state ? state.id : "");
  const [firstName, setFirstName] = useState(state ? state.firstName : "");
  const [lastName, setLastName] = useState(state ? state.lastName : "");
  const [email, setEmail] = useState(state ? state.email : "");
  const [phone, setPhone] = useState(state ? state.contactNumber : "");
  const _id = state ? state._id : "";

  const addUser = () => {
    axios
      .post("http://localhost:2000/api/add-user", {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNumber: phone,
      })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
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
    setSuccessUpdate(true);
  };

  const goBackHandle = () => {
    history.goBack();
  };

  return (
    <div className="container mt-4">
      <div
        id={success ? "display-block" : "display-none"}
        className="my-2 text-center"
      >
        <h2 className="text-success">User Registration Succesful!</h2>
      </div>
      <div
        id={error ? "display-block" : "display-none"}
        className="my-2 text-center"
      >
        <h2 className="text-danger">User Already Exists!</h2>
      </div>
      <div
        id={successUpdate ? "display-block" : "display-none"}
        className="my-2 text-center"
      >
        <h2 className="text-success">User Updated Succesfully!</h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (update) {
            updateUser(_id);
          } else {
            addUser();
          }
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
            className="form-control inline1"
            placeholder="Country code"
            id="countryCode"
          />
          <input
            type="text"
            className="form-control inline2"
            placeholder="Enter contact number"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {update ? "Update" : "Register"}
        </button>
        <a onClick={goBackHandle} className="btn btn-light float-right">
          Go Back
        </a>
      </form>
    </div>
  );
};

export default Form;
