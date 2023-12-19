import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function Home() {
  const [uname, setUname] = useState({
    username: "",
  });
  console.log(uname);
  //   console.log(socket);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setUname({
      ...uname,
      username: e.target.value,
    });
  }

  useEffect(() => {
    socket.on("welcome", (message) => {
      console.log("msg:", message);
    });
    return () => {
      socket.off("welcome");
    };
  }, []);
  return (
    <>
      <div className="container d-flex mt-5">
        <form>
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
