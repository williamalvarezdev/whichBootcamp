import { useState } from "react";
import "../styles/DevBall.css"; 

export function DevBall() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    if (!question.trim()) {
      alert("Please enter a question first!");
      return;
    }
    setLoading(true);
    setError(null);
    setResponse(null);

    try { //INSERT API
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });
      
      if (!res.ok) throw new Error("Error en la respuesta del servidor");

      const data = await res.json();
      setResponse(data.answer); //data.response OR data.answer BASED ON BACKEND RESPONSE STRUCTURE
    } catch (e) {
      setError(e.message || "Error connecting to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="devball-container">
      <div className="mentor-text">Ask your question and click the DevBall</div>
      
      <input 
        type="text" 
        placeholder="Write your question here" 
        value={question}
        onChange={e => setQuestion(e.target.value)}
        className="question-input"
      />

      <div className="ball" onClick={handleClick}>
        <span className="ball-number">8</span>
      </div>


      {loading && <div className="ball-response">Thinking...</div>}

      {error && <div className="ball-response error">{error}</div>}

      {response && <div className="ball-response">{response}</div>}
    </div>
  );
}
