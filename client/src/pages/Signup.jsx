import { useContext } from "react";
import "./Signup.css";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(first_name, last_name, username, email, password);
  };

  return (
    <div className="sign-up">
      <div
        className="container d-flex justify-content-center align-items-center min-vh-100"
        style={{}}
      >
        <div className="row rounded-4 p-3 bg-white shadow box-area">
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "#17BEBB" }}
          >
            <div className="featured-image mb-1">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/331/634/458/sunset-the-sun-the-sky-clouds-wallpaper-preview.jpg"
                alt="airplanes"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
            <p className="text-white fs-2 ">Pride of Africa</p>
            <p className="text-white fs-6">
              Create your free Flygo account to enjoy a lifetime of discounts!
            </p>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text">
                <h2>Register</h2>
              </div>
              <div className="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="First Name"
                  onChange={(e) => setFirst_name(e.target.value)}
                />
              </div>
              <div className="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Last Name"
                  onChange={(e) => setLast_name(e.target.value)}
                />
              </div>
              <div className="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-person-circle"></i>
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group mb-1">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group mt-2 mb-1">
                <button
                  className="btn btn-lg btn btn-outline-primary w-50 fs-6"
                  onClick={handleSubmit}
                >
                  Signup
                </button>
              </div>
              <div className="row">
                <small>
                  Already have an account? <a href="/login">Login</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
