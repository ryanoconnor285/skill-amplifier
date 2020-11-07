import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

function Register({ setAlert, register }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      register({ firstName, lastName, email, password });
    } catch (err) {
      console.error(err.response.data);
      setAlert(
        "An error occurred while submitting the login form. Server responded with a status code of " +
          err.response.status
      );
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(Register);
