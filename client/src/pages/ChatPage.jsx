import { useState } from "react";
import { socket } from "../socket";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const name = localStorage.getItem("name");

  const sendMesage = (e) => {
    e.preventDefault();
    if (message.trim().length >= 1) {
      socket.emit("chat message", { user: name, text: input.value });
      setMessage("");
    }
  };

  socket.on("chat message", (msg) => {
    setMessages([...messages, msg]);
  });

  return (
    <div className="flex flex-col justify-center items-center my-4 w-full">
      {messages.map((msg) => (
        <div className="flex border-l-2  w-full m-auto px-2 my-2">
          <div className=" mr-2 text-blue-400">{msg.user}</div>
          <div className="break-all">{msg.text}</div>
        </div>
      ))}
      <form
        className="w-2/3 flex flex-col my-8"
        onSubmit={(e) => sendMesage(e)}
      >
        <input
          placeholder="enter message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="border  outline-none bg-zinc-900 p-2"
          id="input"
          maxLength={256}
          minLength={1}
          autoComplete="off"
        />
        <button
          disabled={!name}
          className="border-2 mt-2 p-1 rounded-md bg-zinc-900 hover:bg-black "
        >
          Send
        </button>
      </form>
      {!name && (
        <div className="text-red-400">
          enter your name to send messages {">_<"}
        </div>
      )}
    </div>
  );
};

export default ChatPage;
