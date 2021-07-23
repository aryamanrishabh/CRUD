import { useHistory, useLocation } from "react-router";

const Info = () => {
  const location = useLocation();
  const history = useHistory();
  const state = location.state;

  const goBackHandle = () => {
    history.goBack();
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">User Info</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <table className="table mt-4">
            <thead className="text-center">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>{state.id}</td>
                <td>{`${state.firstName} ${state.lastName}`}</td>
                <td>{state.email}</td>
                <td>{state.contactNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <a onClick={goBackHandle} className="btn btn-light float-right">
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
