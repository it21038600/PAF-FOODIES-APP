import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/actions/user.actions";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    dispatch(login(user));
  };
  return (
    <div className="container mt-5 mb-5 card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <h1 className="mt-2">WELCOME TO INSTAGRAM</h1>
          <div className="mt-5 mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your username with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
