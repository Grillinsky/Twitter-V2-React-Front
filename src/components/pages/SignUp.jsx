/* eslint-disable no-unused-vars */
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "../reducers/userSlice";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [showError, setShowError] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      let formData = new FormData(e.target); //formdata object

      try {
        const response = await axios({
          method: "POST",
          url: "http://localhost:3000/auth/users/signup",
          data: formData,
          headers: { "content-type": "multipart/form-data" },
        });
        dispatch(setUserCredentials(response.data));
        setUser(response.data);
      } catch (err) {
        console.error(err.response);
      }
    } else {
      setShowError(true);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <main id="signUpBody">
      <div
        id="mainWrapper"
        className="d-flex align-items-center justify-content-center"
      >
        <main className="bg-white rounded w-75">
          <div className="container-fluid">
            <div id="rowContainer" className="row">
              {/*  Aside for tablet & desktop */}
              <aside
                id="signUpAside"
                className="d-none d-md-block d-lg-block col-md-6 col-lg-8 rounded-start text-white"
              >
                <i
                  id="twitterIcon"
                  className="fab fa-twitter fa-4x slide-in-right m-5"
                >
                  <span className="d-none">Icono de Twitter</span>
                </i>
                <div id="welcome" className="container m-5">
                  <h2 className="fs-1">Hi! Welcome to Twitter Clone 👋🏻</h2>
                </div>
              </aside>
              <section className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
                <form
                  onSubmit={handlerSubmit}
                  method="post"
                  className="w-100 p-3"
                  encType="multipart/form-data"
                  action="/users/signUp"
                >
                  <h1>Sign Up</h1>
                  <small>Create an account </small>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="Nombre..."
                      required
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setLasttName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      placeholder="Apellido..."
                      required
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      required
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <div className="form-floating">
                      <input
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="@Username"
                        required
                      />
                      <label htmlFor="userName">Username</label>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={(e) => {
                        setAvatar(e.target.files[0]);
                      }}
                      type="file"
                      className="form-control"
                      id="avatar"
                      name="avatar"
                      placeholder="Select your picture"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="form-floating">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="form-floating">
                      <input
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                        name="confirmPassword"
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Please confirm yout password"
                        required
                      />
                      <label htmlFor="confirmPassword">
                        Confirm your Password
                      </label>
                    </div>
                  </div>
                  <div className="form-floating">
                    <Form.Control.Feedback type="invalid">
                      Passwords does not match, try again
                    </Form.Control.Feedback>
                  </div>
                  <div className="d-grid my-3">
                    <button
                      type="submit"
                      id="signUpButton"
                      className="btn rounded-pill btn-fluid text-white mb-5"
                    >
                      Login
                    </button>
                  </div>
                  <small className="d-block text-center">
                    Already have an account? <Link to="/login">Sign In</Link>
                  </small>
                </form>
              </section>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}

export default SignUp;
