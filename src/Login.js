import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import FormInput from "./components/formInput";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.getItem("username");
    localStorage.getItem("password");

    if (
      values.username === localStorage.getItem("username") &&
      values.password === localStorage.getItem("password")
    ) {
      navigate("/Dashboard");
    } else {
      console.log("error");
      alert("Invalid Username or Password");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
