/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { setUserCredentials } from "../reducers/userSlices";
import { useDispatch } from "react-redux";

import "../login/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/auth/login",
        data: { email: email, password: password },
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(setUserCredentials(response.data));
      setUser(response.data);
    } catch (err) {
      console.error(err.response);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <main id="#logInBody">
      <div
        id="mainWrapper"
        className="d-flex align-items-center justify-content-center"
      >
        <main className="bg-white rounded w-75">
          <div className="container-fluid">
            <div id="rowContainer" className="row">
              {/* <!-- Aside for tablet & desktop --> */}
              <aside
                id="logInAside"
                className="d-none d-md-block d-lg-block col-md-6 col-lg-8 text-white rounded-start"
              >
                <i
                  id="twitterIcon"
                  className="fab fa-twitter fa-4x m-3 slide-in-right m-5"
                >
                  <span className="d-none">Icono de Twitter</span>
                </i>
                <div id="welcome" className="container m-5 px-4">
                  <h2 className="fs-1">Hey! Nice to see you again 🥰</h2>
                </div>
              </aside>
              <section className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
                <form
                  onSubmit={handlerSubmit}
                  method="post"
                  className="w-100 p-3"
                >
                  <h1>Login</h1>
                  <small>Ready to start using Twitter?</small>
                  <div className="form my-3">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      className="form-control mb-3"
                      id="userName"
                      name="username"
                      placeholder="Username or email"
                    />

                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="d-grid my-3">
                    <button
                      id="logInButton"
                      className="btn rounded-pill btn-fluid text-white mb-5"
                    >
                      Login
                    </button>
                  </div>
                  {/* <small className="d-block text-center text-danger mb-3"><%= messages.info %></small> */}

                  <small className="d-block text-center">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
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

export default Login;
