import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userSignUp } from "../../Redux/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values: { username, firstName, lastName, email, isCheck, password },
    errors: {
      username: errUsername,
      firstName: errFirstName,
      lastName: errLastName,
      email: errEmail,
      password: errPassword
    }
  } = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isCheck: false
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("User Name is required"),
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email().required("E-mail is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: (values) => {
      dispatch(userSignUp(values));
      navigate("/");
    }
  });
  return (
    <div className="wrapper">
      <div className="body">
        <p className="title">Create Account</p>
        <p className="helper-text">
          Already have account?{" "}
          <span className="link quick-link" onClick={() => navigate("/signin")}>
            Sign In
          </span>
        </p>
        <form>
          <input
            className={`form-control ${errUsername ? "is-invalid" : ""}`}
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="user-info">
            <input
              className={`form-control ${errFirstName ? "is-invalid" : ""}`}
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <input
              className={`form-control ${errLastName ? "is-invalid" : ""}`}
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <input
            className={`form-control ${errEmail ? "is-invalid" : ""}`}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
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
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="isCheck"
              value={isCheck}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I have read and agree to the <span>Terms of Services</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
