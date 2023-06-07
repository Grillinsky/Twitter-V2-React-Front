import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      lastName,
      firstName,
      userName,
      avatar,
      password,
      confirmPassword,
      email
    );
    // if()
  }
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
                  className="fab fa-twitter fa-4x slide-in-right m-3"
                >
                  <span className="hide-element">Icono de Twitter</span>
                </i>
                <div id="welcome" className="container m-4">
                  <h2>Hi! Welcome to Twitter Clone 👋🏻</h2>
                </div>
              </aside>
              <section className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
                <form
                  onSubmit={handleSubmit}
                  method="post"
                  className="w-100 p-3"
                  enctype="multipart/form-data"
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
                      id="firstName"
                      name="firstname"
                      placeholder="Nombre..."
                    />
                    <label for="firstName">First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setLasttName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastName"
                      placeholder="Apellido..."
                    />
                    <label for="lastName">Last Name</label>
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
                    />
                    <label for="email">Email address</label>
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
                        name="userName"
                        placeholder="@Username"
                      />
                      <label for="userName">Username</label>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <label htmlFor="avatar">Select your Avatar Picture</label>
                    <input
                      onChange={(e) => {
                        setAvatar(e.target.files[0]);
                      }}
                      type="file"
                      className="form-control"
                      id="avatar"
                      name="avatar"
                    />
                  </div>
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
                    />
                    <label for="password">Password</label>
                  </div>
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
                    />
                    <label for="confirmPassword">Confirm your Password</label>
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
