import React from "react";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";

import { users, userSignIn } from "../../Redux/authSlice";

const SignIn = () => {
  const usersDetail = useSelector(users);
  const dispacth = useDispatch();

  const onUserValid = () => {
    const existUser = usersDetail.find(
      (val) => val.email === username || val.username === username
    );
    if (existUser) {
      if (existUser.password !== String(password)) {
        setErrors({ password: "Wrong Password" });
      } else {
        dispacth(userSignIn(existUser))
        navigate("/");
      }
    } else {
      setErrors({
        username: "Wrong Username Email",
        password: "Wrong Password"
      });
    }
  };

  const navigate = useNavigate();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values: { username, password },
    errors: { username: errUsername, password: errPassword },
    setErrors
  } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("User Name is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: (values) => {
      onUserValid();
    }
  });
  return (
    <div className="wrapper">
      <div className="body signin">
        <p className="title">Login Account</p>
        <p className="helper-text">
          Do not have account?{" "}
          <span className="link quick-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
        <form>
          <input
            className={`form-control ${errUsername ? "is-invalid" : ""}`}
            type="text"
            placeholder="Username/Email"
            name="username"
            value={username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            className={`form-control ${errPassword ? "is-invalid" : ""}`}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button
            type="Submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
