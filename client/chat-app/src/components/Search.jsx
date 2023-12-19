const Search = () => {
  return (
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
  );
};

export default Search;
