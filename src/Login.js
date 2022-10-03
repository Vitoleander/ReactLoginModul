import { Link } from "react-router-dom";

import './App.css';
import FormInput from './components/formInput';

const Login = () => {
  
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
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      localStorage.getItem("username", inputs.username);
      localStorage.getItem("password", inputs.password);
    };
  
    return (
      <div className='app'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {inputs.map((input) => (
            <FormInput 
              key={input.id} 
              {...input} 
        />
        ))}
        <Link to="/Dashboard"><button>Login</button></Link>
      </form>
    </div>
    );
  };
  
  export default Login;
  