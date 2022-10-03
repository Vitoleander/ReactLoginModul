import { useState } from 'react';
import { Link } from "react-router-dom";

import './App.css';
import FormInput from './components/formInput';

const Register = () => {
    const [values, setValues] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  
    const inputs = [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage: "Username should be 3-16 characters and not include special characters!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email adress",
        label: "Email",
        required: true,
      },
      {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Password do not match!",
        label: "Confirm Password",
        pattern: values.password,
        required: true,
      }
    ];
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      localStorage.setItem("username", values.username);
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
    };
  
    const onChange = (e) =>{
      setValues({...values, [e.target.name]: e.target.value})
    };
  
    console.log(values);
  
    return (
      <div className='app'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput 
              key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={onChange} 
        />
        ))}
        <Link to="/Login"><button>Submit</button></Link>
      </form>
    </div>
    );
  };
  
  export default Register;
  