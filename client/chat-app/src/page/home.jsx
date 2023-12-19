export default function Home() {
  return (
    <>
      <div className="container d-flex-col justify-content-center text-center">
        <h1>Home</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control w-25 justify-content-center text-center"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            username for group in chat
          </div>
        </div>
      </div>
    </>
  );
}
