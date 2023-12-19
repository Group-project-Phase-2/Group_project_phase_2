const Message = () => {
  return (
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
  );
};

export default Message;
