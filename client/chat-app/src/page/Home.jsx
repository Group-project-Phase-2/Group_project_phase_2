import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../features/messageSlice/messageSlice";

import img2 from "../img/avataaars.png";
import img3 from "../img/avataaars1.png";
import img4 from "../img/avataaars4.png";
import img5 from "../img/avataaars5.png";
import img6 from "../img/avataaars6.png";
import img7 from "../img/avataaars7.png";
import img8 from "../img/avataaars8.png";
import img9 from "../img/avataaars9.png";
import img0 from "../img/avataaars10.png";

const socket = io("https://server.challange1.online", {
  autoConnect: false,
});

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const message = useSelector((state) => {
    console.log(state, "<<<< state home");
    return state.message.list;
  });

  const [Chat, setChat] = useState();
  // console.log(Chat);

  const [online, setOnline] = useState([]);

  // const [messages, setMessages] = useState([]);
  //   console.log(messages);
  const avatarside = [img2, img3, img4, img5, img6, img7, img8, img9, img0];

  function handleChange(e) {
    setChat(e.target.value);
  }
  function logout(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      socket.emit("kirimText", Chat);
    } catch (error) {
      console.log(error);
    }
  }

  function random1() {
    const random03 = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    return random03;
  }

  function random2() {
    const random41 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    return random41;
  }

  function random3() {
    const random08 = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    return avatarside[random08];
  }

  const animation = [
    "https://lottie.host/7b6200c9-a2ef-49e4-8f45-d2f630e7c509/OLD8FrvGzL.json",
    "https://lottie.host/5af21c82-7d71-4fd1-87ff-c9e319bc5c62/g7oYsiKPTD.json",
    "https://lottie.host/83ddbff0-2706-480e-97f9-a785a4ae5afe/gSYDE8PwJQ.json",
    "https://lottie.host/6465e9fa-d90d-42c1-b828-db0b3ffa1f26/vfnZdLG5jr.json",
  ];

  const staticRandomValue = Math.floor(Math.random() * (8 - 0 + 1)) + 0;

  useEffect(() => {
    socket.connect();
    socket.auth = {
      username: localStorage.getItem("username"),
    };

    socket.on("msg update", (msg) => {
      // setMessages((current) => {
      //   return [...current, msg];
      // });
      dispatch(setMessage(msg));
      console.log(msg, "<<<< log msg");
    });

    socket.on("welcome", (message) => {
      // console.log("msg:", message);
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

  // const randomAvatar = random3();

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="sidebar">
            <div className="navbar">
              <span className="logo">Chat Rooms</span>
              <div className="user">
                <img
                  alt="/"
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                />
                <span>{localStorage.username}</span>
                <button onClick={logout}>logout</button>
              </div>
            </div>
            <div className="search">
              <div className="searchForm">
                <input type="text" placeholder="Find a user" />
              </div>
            </div>
            <div className="chats">
              {/*  */}
              {online.map((el) => {
                // return <p key={el.socketId}>{el.username} Online</p>;
                return (
                  <>
                    <div className="userChat" key={el.socketId}>
                      <img src={avatarside[staticRandomValue]} alt="" />
                      <div className="userChatInfo">
                        <span>{el.username}</span>
                        <p>Online</p>
                      </div>
                    </div>
                  </>
                );
              })}
              {/*  */}
            </div>
          </div>
          <div className="chat">
            <div className="chatInfo">
              <span>Basa Basi</span>
              <div className="chatIcons">
                <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" />
              </div>
            </div>
            <div className="messages">
              {message.map((el, i) => {
                return (
                  <div
                    key={i}
                    className={`message ${
                      el.from === localStorage.username && "owner"
                    } `}
                  >
                    <div className="messageInfo">
                      <img
                        alt=""
                        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                      />
                      <span>{el.from}</span>
                    </div>
                    <ul>
                      <div className="messageContent">
                        <p>{el.hasiltext}</p>
                      </div>
                    </ul>
                  </div>
                );
              })}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Type something..."
                />
                <div className="send">
                  <img src={Attach} alt="" />
                  <input type="file" style={{ display: "none" }} id="file" />
                  <label htmlFor="file">
                    <img src={Img} alt="" />
                  </label>
                  <button>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          {online.map((el) => {
            return (
              <>
                <div
                  className={`avatar${
                    Math.floor(Math.random() * (4 - 1 + 1)) + 1
                  }`}
                >
                  <p>{el.username}</p>
                  <dotlottie-player
                    src={animation[Math.floor(Math.random() * (3 - 0 + 1)) + 0]}
                    background="transparent"
                    speed="1"
                    style={{ width: "100px", height: "100px" }}
                    loop
                    autoplay
                  ></dotlottie-player>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
