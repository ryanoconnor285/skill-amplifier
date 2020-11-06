import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import axios from "axios";

function Login({ setAlert }) {
  const [formData, setFormData] = useState({
    email: "roconnor@orangecountync.gov",
    password: "high-Falcon",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(formData);

      const res = await axios.post("api/auth", body, config);
      console.log(res);
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
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
          required
        />

        <input
          type="password"
          placeholder="Passoword"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
          required
        />

        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Login);
