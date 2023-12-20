import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [uname, setUname] = useState();
  console.log(uname);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      localStorage.setItem("username", uname);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setUname(e.target.value);
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat Rooms</span>
        <span className="title">Username</span>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="username"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
