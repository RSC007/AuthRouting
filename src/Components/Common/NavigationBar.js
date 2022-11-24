import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { userLogout } from "../../Redux/authSlice";
import ConfirmationPopUp from "./ConfirmationPopUp";

const NavigationBar = () => {
  const [isOpen, setIsopen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggle = () => setIsopen(!isOpen)
  const onLogout = () => {
    toggle()
    dispatch(userLogout())
    navigate("/signup")
  }

  const isLogin = useMemo(() => {
    switch (pathname) {
      case "/signin":
        return "Sign Up";
      case "/signup":
        return "Sign In";
      default:
        return "Logout";
    }
  }, [pathname]);

  const userAction = () => {
    if (isLogin === "Logout") {
      setIsopen(true)
    } else if (isLogin === "Sign Up") {
      navigate("/signup");
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
    <div className="w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link className="navbar-brand" href="/">
          Auth
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          {isLogin === "Logout" && <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>}
            {isLogin === "Logout" && <li className="nav-item">
              <Link className="nav-link pe-auto" to="/country">
                Countries
              </Link>
            </li>}
            <li className="nav-item">
              <span className="nav-link pe-auto" onClick={userAction}>
                {isLogin}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    {isOpen && <ConfirmationPopUp
      color="danger"
      title="Delete"
      message={`Are you sure you want to Logout?`}
      toggle={toggle}
      onLogout={onLogout}
      />}
    </>
  );
};

export default NavigationBar;
