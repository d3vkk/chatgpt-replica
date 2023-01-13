import React, { Component } from "react";
import "./normalize.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside className="sidemenu">
          <div className="sidemenu-button">
            <span>+</span> New Chat
          </div>
        </aside>
        <section className="chatbox">
          <div className="chat-log">
            <div className="chat-message">
              <div className="chat-message-center">
                <div className="avatar">
                  <img src="/avatar.svg" alt="" />
                </div>
                <div className="message">Hi</div>
              </div>
            </div>
            <div className="chat-message chatgpt">
              <div className="chat-message-center">
                <div className="avatar">
                  <img src="/chatgpt-logo.jpg" alt="" />
                </div>
                <div className="message">ChatGPT</div>
              </div>
            </div>
          </div>
          <div className="chat-input-holder">
            <textarea className="chat-input-textarea" rows="1"></textarea>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
