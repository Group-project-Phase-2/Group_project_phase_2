import React from 'react';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Img from '../img/img.png';
import Attach from '../img/attach.png';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const socket = io('http://localhost:3000', {
  autoConnect: false,
});

const Home = () => {
  const navigate = useNavigate();

  const [Chat, setChat] = useState();
  // console.log(Chat);

  const [online, setOnline] = useState([]);

  const [messages, setMessages] = useState([{}]);
  //   console.log(messages);

  function handleChange(e) {
    setChat(e.target.value);
  }
  function logout(e) {
    e.preventDefault();
    localStorage.clear();
    navigate('/login');
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      socket.emit('kirimText', Chat);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    socket.connect();
    socket.auth = {
      username: localStorage.getItem('username'),
    };

    socket.on('msg update', (msg) => {
      setMessages((current) => {
        return [...current, msg];
      });
    });

    socket.on('welcome', (message) => {
      // console.log("msg:", message);
    });

    socket.on('onlineUser', (online) => {
      console.log(online);
      setOnline(online);
    });

    return () => {
      socket.off('welcome');
      socket.off('update');
      socket.off('onlineUser');
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="sidebar">
            <div className="navbar">
              <span className="logo">Chat Rooms</span>
              <div className="user">
                <img alt="/" />
                <span>{localStorage.username}</span>
                <button onClick={logout}>logout</button>
              </div>
            </div>
            <div className="search">
              <div className="searchForm">
                <input type="text" placeholder="Find a user" />
              </div>
              {/* jika user tidak ada */}
              {/* <span>User not found!</span> */}
              {/* jika user ada */}
              {/* <div className="userChat" onClick={handleSelect}>
          <img src="" alt="" />
          <div className="userChatInfo">
            <span>user display name</span>
          </div>
        </div> */}
            </div>
            <div className="chats">
              {/*  */}
              {online.map((el) => {
                // return <p key={el.socketId}>{el.username} Online</p>;
                return (
                  <>
                    <div className="userChat" key={el.socketId}>
                      <img src="" alt="" />
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
              {messages.map((el, i) => {
                return (
                  <div className={`message ${el.from === localStorage.username && 'owner'} `}>
                    <div className="messageInfo">
                      <img src="https://cdn-icons-png.flaticon.com/512/266/266033.png" alt="" />
                      <span>{el.from}</span>
                    </div>
                    <ul>
                      <div className="messageContent">
                        <p>{el.hasiltext}</p>
                        {/* jika ada gambar pada pesan */}
                        {/* <img src="" alt="" /> */}
                      </div>
                    </ul>
                  </div>
                );
              })}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input type="text" onChange={handleChange} placeholder="Type something..." />
                <div className="send">
                  <img src={Attach} alt="" />
                  <input type="file" style={{ display: 'none' }} id="file" />
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
          <div className="avatar1">
            <p>Mico</p>
            <dotlottie-player src="https://lottie.host/7b6200c9-a2ef-49e4-8f45-d2f630e7c509/OLD8FrvGzL.json" background="transparent" speed="1" style={{ width: '100px', height: '100px' }} loop autoplay></dotlottie-player>
          </div>
          <div className="avatar2">
            <p>Heru</p>
            <dotlottie-player src="https://lottie.host/5af21c82-7d71-4fd1-87ff-c9e319bc5c62/g7oYsiKPTD.json" background="transparent" speed="1" style={{ width: '100px', height: '100px' }} loop autoplay></dotlottie-player>
          </div>
          <div className="avatar3">
            <p>Cemonk</p>
            <dotlottie-player src="https://lottie.host/83ddbff0-2706-480e-97f9-a785a4ae5afe/gSYDE8PwJQ.json" background="transparent" speed="1" style={{ width: '100px', height: '100px' }} loop autoplay></dotlottie-player>
          </div>
          <div className="avatar4">
            <p>Irwan</p>
            <dotlottie-player src="https://lottie.host/6465e9fa-d90d-42c1-b828-db0b3ffa1f26/vfnZdLG5jr.json" background="transparent" speed="1" style={{ width: '100px', height: '100px', transform: "scaleX(-1)" }} loop autoplay></dotlottie-player>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
