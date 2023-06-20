import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/bongotap.gif";

const HomePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const saveName = (e) => {
    e.preventDefault();
    setError("");
    if (name.trim().length >= 4) {
      localStorage.setItem("name", name);
      navigate("/chat");
      return;
    }
    setError("4 or more characters >_<");
  };

  return (
    <div className="flex flex-col items-center  my-16">
      <div>yo</div>
      <img className="w-36" src={img} alt="" />

      {localStorage.getItem("name") ? (
        <div>
          Hello{" "}
          <div className="text-blue-400 inline">
            {localStorage.getItem("name")}
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => saveName(e)}
          className="w-2/3 flex flex-col px-2 my-2"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="enter a name"
            type="text"
            className="border outline-none bg-zinc-900 block p-2"
            maxLength={64}
          />
          <button className="border-2 p-1 mt-2 rounded-md bg-zinc-900 hover:bg-black ">
            Send
          </button>
        </form>
      )}

      <div className="text-red-400">{error}</div>
    </div>
  );
};
export default HomePage;
