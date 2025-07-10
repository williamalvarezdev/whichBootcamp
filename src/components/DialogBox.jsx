import { useState, useRef, useEffect } from "react";
import "../styles/DialogBox.css";

export function DialogBox({ selectedBootcamp }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: selectedBootcamp
        ? `Welcome, ${selectedBootcamp} adventurer! Ask Professor Oak anything to begin your journey.`
        : "Welcome adventurer! Ask Professor Oak anything to help you find your ideal bootcamp."
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function fetchBotResponse(userMessage) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!selectedBootcamp) {
          resolve(
            `Hmm, sounds like you're interested in finding the right Bootcamp. Let's find out the best fit!`
          );
        } else {
          resolve(`You asked: "${userMessage}". Professor Oak is pondering...`);
        }
      }, 1000);
    });
  }

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((msgs) => [...msgs, { sender: "user", text: userMessage }]);
    setInput("");

    const botReply = await fetchBotResponse(userMessage);

    setMessages((msgs) => [...msgs, { sender: "bot", text: botReply }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="dialog-box">
      <div className="dialog-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === "user" ? "message-user" : "message-bot"}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Write your question..."
          className="dialog-input"
        />
        <button onClick={handleSend} className="dialog-button">
          SEND
        </button>
      </div>
    </div>
  );
}
