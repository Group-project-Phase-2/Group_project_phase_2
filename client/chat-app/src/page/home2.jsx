import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home2() {
  const navigate = useNavigate();
  const [uname, setUname] = useState();
  console.log(uname);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      localStorage.setItem("username", uname);
      navigate("/group");
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setUname(e.target.value);
  }

  return (
    <>
      <div className="container d-flex mt-5">
        <form onSubmit={handleSubmit}>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              class="form-control"
              onChange={handleChange}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
