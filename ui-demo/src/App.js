import React from "react";
import "./normalize.css";
import "./App.css";
import { getModels } from "./models";
import getSampleResponse from "./sampleResponse";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    getEngines(getModels, getSampleResponse);
  }, []);

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [models, setModels] = useState([]);
  const [sampleResponse, setSampleResponse] = useState({});
  const [setCurrentModel] = useState("ada");

  function clearChat() {
    setChatLog([]);
  }

  function getEngines(getModels, getSampleResponse) {
    setModels(getModels.models);
    setSampleResponse(getSampleResponse);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];
    setInput("");

    setChatLog([
      ...chatLogNew,
      {
        user: "gpt",
        message: `${sampleResponse.choices[0].text}`,
      },
    ]);
  }

  return (
    <div className="App">
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
          <div className="chat-input-cover">
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
            <div className="newchat-button" onClick={clearChat}>
              <span>+</span> New Chat
            </div>
            <a
              className="github-button"
              href=" https://github.com/d3vkk/chatgpt-replica"
            >
              GitHub
            </a>
          </div>
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
