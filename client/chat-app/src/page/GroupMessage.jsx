import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  autoConnect: false,
});
export default function GroupMessage() {
  const [hasil, sethasil] = useState();
  console.log(hasil, "hasill");
  console.log(localStorage.getItem("username"), "username");
  const [Chat, setChat] = useState();
  console.log(Chat);

  const [online, setOnline] = useState([]);

  function handleChange(e) {
    setChat(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      socket.emit("kirimText", Chat);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    socket.connect();
    socket.auth = {
      username: localStorage.getItem("username"),
    };
    socket.on("welcome", (message) => {
      console.log("msg:", message);
    });

    socket.on("update", (hasiltext) => {
      console.log("msg:", hasiltext);
      sethasil(hasiltext);
    });

    socket.on("onlineUser", (online) => {
      console.log(online);
      setOnline(online);
    });

    return () => {
      socket.off("welcome");
      socket.off("update");
      socket.off("onlineUser");
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="container d-flex-col mt-5">
        <form onSubmit={handleSubmit}>
          <input name="input" onChange={handleChange}></input>{" "}
          <button type="submit">submit</button>
          <div className="d-flex-col">
            {online.map((el) => {
              return <p>{el.username} Online</p>;
            })}
          </div>
          <h1>{hasil}</h1>
          <h1>tes2</h1>
        </form>
      </div>
    </>
  );
}
