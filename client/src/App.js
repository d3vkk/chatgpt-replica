import React from "react";
import "./normalize.css";
import "./App.css";
import { getModels } from "./models";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    getEngines(getModels);
  }, []);

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("ada");

  function clearChat() {
    setChatLog([]);
  }

  function getEngines(getModels) {
    // fetch("http://localhost:3600/models")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.models.data);
    //     setModels(data.models.data);
    //   });

    setModels(getModels.models);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
    await setInput("");
    await setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.message).join("\n");

    const response = await fetch("http://localhost:3600/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
        currentModel,
      }),
    });
    const data = await response.json();
    await setChatLog([
      ...chatLogNew,
      { user: "gpt", message: `${data.message}` },
    ]);

    console.log(data.message);
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="sidemenu-button" onClick={clearChat}>
          <span>+</span> New Chat
        </div>
        <div className="models">
          <select
            onChange={(e) => {
              setCurrentModel(e.target.value);
            }}
          >
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.id}
              </option>
            ))}
          </select>
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
