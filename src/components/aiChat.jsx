import { useState } from 'react';
import { Ollama } from 'ollama/browser';
import '../styles/aiChat.css';

// Envs
const host = import.meta.env.VITE_OLLAMA_HOST;
const model = import.meta.env.VITE_OLLAMA_MODEL;

// Ollama client
const ollama = new Ollama({ host: host });

export function AIChat() {
  const [input, setInput] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    setResponseText('');
    setInput('');
    setLoading(true);


    try {
      const response = await ollama.chat({
        model: model,
        messages: [{ role: 'user', content: input }],
        stream: true,
      });

      for await (const part of response) {
        setResponseText(prev => prev + part.message.content);
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setResponseText('Error: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="aichat-container">
      <h2>AI Chat</h2>
      <form onSubmit={handleSubmit} className="aichat-form">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask a question..."
          disabled={loading}
          className="aichat-input"
        />
        <button type="submit" disabled={loading} className="aichat-button">
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </form>
      <div className="aichat-response">{responseText}</div>
    </div>
  );
}
