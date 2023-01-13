import React from "react";
import "./normalize.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog((chatLog) => [...chatLog, { user: "me", message: `${input}` }]);
    setInput("");
    console.log("handleSubmit ~ chatLog", chatLog);

    const response = await fetch("http://localhost:3600/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chatLog.map((message) => message.message).join(""),
      }),
    });
    const data = await response.json();
    setChatLog((chatLog) => [
      ...chatLog,
      { user: "gpt", message: `${data.message}` },
    ]);
    console.log("handleSubmit2 ~ chatLog", chatLog);

    console.log(data.message);
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="sidemenu-button">
          <span>+</span> New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {Array.isArray(chatLog)
            ? chatLog.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))
            : null}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              className="chat-input-textarea"
              rows="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
          {message.user === "gpt" && (
            <img src="/chatgpt-logo.jpg" alt="ChatGPT Logo" />
          )}
          {message.user !== "gpt" && (
            <img src="/avatar.svg" alt="Avatar Logo" />
          )}
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

export default App;
