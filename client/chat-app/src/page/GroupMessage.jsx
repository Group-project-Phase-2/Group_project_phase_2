import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");
export default function GroupMessage() {
  const [hasil, sethasil] = useState();
  console.log(hasil, "hasill");
  const [Chat, setChat] = useState();
  console.log(Chat);

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
    socket.on("welcome", (message) => {
      console.log("msg:", message);
    });

    socket.on("update", (hasiltext) => {
      console.log("msg:", hasiltext);
      sethasil(hasiltext);
    });

    return () => {
      socket.off("welcome");
      socket.off("update");
    };
  }, []);

  return (
    <>
      <div className="container d-flex-col mt-5">
        <form onSubmit={handleSubmit}>
          <input name="input" onChange={handleChange}></input>{" "}
          <button type="submit">submit</button>
          <h1>{hasil}</h1>
          <h1>tes2</h1>
        </form>
      </div>
    </>
  );
}
