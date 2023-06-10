import axios from "axios";
import { useNavigate } from "react-router-dom";

import { clearUser } from "../reducers/userSlice";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function LogoutBtn() {
  const navigate = useNavigate();
  const [response, setResponse] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlerLogout = async () => {
    const res = await axios.get("http://localhost:3000/logout", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setResponse(res);
    dispatch(clearUser());

    navigate("/login");
  };

  return (
    <button
      onClick={handlerLogout}
      className="nav-btn btn-logout disable-text-btn"
    >
      <img
        src="/src/assets/twitter-icons/icons/logout.png"
        alt="Logo de salida, presiona para cerrar tu sesión"
        className="me-2"
      />
      <span>Logout</span>
    </button>
  );
}

export default LogoutBtn;
