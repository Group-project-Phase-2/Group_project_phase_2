const Message = () => {
  return (
    <>
      {/* pesan dari user aktif */}
      <div className="message owner">
        <div className="messageInfo">
          <img src="" alt="" />
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>isi pesannya</p>
          {/* jika ada gambar pada pesan */}
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      {/* pesan dari user lain */}
      <div className="message">
        <div className="messageInfo">
          <img src="" alt="" />
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>isi pesannya</p>
          {/* jika ada gambar pada pesan */}
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Message;
